import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  sentToNursery: number;
  pending: number;
  searchFormControl = new FormControl();
  searchKeyword = '';
  orders = [];
  allOrders = [];
  tableDataSource = new BehaviorSubject<Order[]>([]);
  displayedColumns = new BehaviorSubject<string[]>([
    'customerName',
    'city',
    'treeName',
    'quantity',
    'orderDate',
    'actions'
  ]);
  sortKey$ = new BehaviorSubject<string>('created_at');
  sortDirection$ = new BehaviorSubject<string>('desc');
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  constructor(private orderService: OrderService) { }


  ngOnInit() {
    this.getOrders();

    const combinedSub = combineLatest([this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$, this.currentPage$, this.pageSize$])
      .subscribe(([searchTerm, sortKey, sortDirection]) => {
        const heroesArray = this.orders;
        let filteredHeroes: any[];
        if (!searchTerm) {
          filteredHeroes = heroesArray;
        } else {
          const filteredResults = heroesArray.filter(order => order.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
            || order.customer.city.toLowerCase().includes(searchTerm.toLowerCase())
            || order.tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
            || order.tree.name.toLowerCase().includes(searchTerm.toLowerCase())
            || order.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
          filteredHeroes = filteredResults;
        }
        const sortedHeroes = filteredHeroes.sort((a, b) => {
          switch (sortKey) {
            case 'name':
              if (a.customer.name === null) { a.customer.name = ' ' }
              return a.customer.name.localeCompare(b.customer.name) > 0 ? (sortDirection === 'asc' ? 1 : -1) : (sortDirection === 'desc' ? 1 : -1);
            case 'city':
              return a.customer.city.localeCompare(b.customer.city) > 0 ? (sortDirection === 'asc' ? 1 : -1) : (sortDirection === 'desc' ? 1 : -1);
            case 'treeName':
              return a.tree.name.localeCompare(b.tree.name) > 0 ? (sortDirection === 'asc' ? 1 : -1) : (sortDirection === 'desc' ? 1 : -1);

            default:
              if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
              if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          }
        });
        this.tableDataSource.next(sortedHeroes);
      });
    this.subscriptions.push(combinedSub);
    const paginationSub = combineLatest([this.tableDataSource, this.currentPage$, this.pageSize$])
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
      });
    this.subscriptions.push(paginationSub);
    this.searchFormControl.setValue('');
  }

  ionViewDidEnter() {

  }

  getOrders() {
    const getOrderSub = this.orderService.getOrders().subscribe((res: any) => {
      this.allOrders = res.data.map(order => {
        return {
          ...order,
          customer: {
            ...order.customer,
            name: !!order.customer.name ? order.customer.name : '',
          }
        }
      });
      this.orders = this.allOrders;
      this.tableDataSource.next(this.orders);
      this.pending = this.orders.filter(order => !order.isSentToNursery).length;
      this.sentToNursery = this.orders.filter(order => order.isSentToNursery).length;
    });
    this.subscriptions.push(getOrderSub);
  }

  filterSearch() {
    this.orders = this.allOrders.filter(order => order.customer.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      || order.customer.city.toLowerCase().includes(this.searchKeyword.toLowerCase())
      || order.tree.scientificName.toLowerCase().includes(this.searchKeyword.toLowerCase())
      || order.tree.name.toLowerCase().includes(this.searchKeyword.toLowerCase()));
  }

  export() {
    this.orderService.orderExport().subscribe(response =>
      this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    );
  }

  sendToNursery() {
    this.orderService.sendToNursery().subscribe(response => {
      this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      this.getOrders();
    }
    );
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }
    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
