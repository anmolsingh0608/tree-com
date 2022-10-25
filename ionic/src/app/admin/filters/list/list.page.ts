import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  filters: Filter[] = [];

  constructor(private filterService: FiltersService, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const filterSub = this.getFilters().subscribe((res) => {
      this.filters = res.data;
    });
    this.subscriptions.push(filterSub);
  }

  getFilters() {
    return this.filterService.getFilters();
  }

  async delete(id){
    const alert = await this.alertController.create({
      header: 'Do you want to delete this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            const deleteSub = this.filterService.delete(id).subscribe((res: any) => {
              this.filters = this.filters.filter(filter => filter.id !== id);
            });
            this.subscriptions.push(deleteSub);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
