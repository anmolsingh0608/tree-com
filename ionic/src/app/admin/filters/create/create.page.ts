import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { ToastService } from 'src/app/services/toast.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  filter: Filter;
  filterId: number;
  filterForm = new FormGroup({
    name: new FormControl('', Validators.required),
    item: new FormArray([])
  });
  namesArray = [
    {
      'value': 'form',
      'option': 'Form'
    },
    {
      'value': 'fruit',
      'option': 'Fruit'
    },
    {
      'value': 'tolerances',
      'option': 'Tolerances'
    },
    {
      'value': 'size',
      'option': 'Size'
    },
    {
      'value': 'fallColor',
      'option': 'Fall Color'
    },
    {
      'value': 'flowerColor',
      'option': 'Flower Color'
    },
    {
      'value': 'flowerTime',
      'option': 'Flower Time'
    },
    {
      'value': 'growthRate',
      'option': 'Growth Rate'
    },
    {
      'value': 'nativeRegion',
      'option': 'Native Region'
    },
  ];

  constructor(private toastService: ToastService,
    private filterService: FiltersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  get items() : FormArray {
    return this.filterForm.get('item') as FormArray;
  }

  ngOnInit() {
    const paramSub = this.route.params.subscribe((params) => {
      if (params.id) {
        this.filterId = params.id;
        const filterSub = this.filterService.getFilter(params.id).subscribe((res) => {
          this.filter = res.data;
          this.items.clear();
          this.filter.item.forEach((item) =>
            this.items.push(new FormControl(item , Validators.required)
          ));
          this.filterForm.patchValue(this.filter);
          this.filterForm.controls['name'].disable();
        });
        this.subscriptions.push(filterSub);
      }
    });
    this.subscriptions.push(paramSub);
  }

  removeItem(i) {
    this.items.removeAt(i);
  }

  addItem() {
    this.items.push(new FormControl('', Validators.required));
  }

  save() {
    if (!this.filterForm.valid) {
      this.toastService.presentToast('Please fill all the required fields');
      return;
    }
    let filterObs = null;
    filterObs = this.filterService.create(this.filterForm.value as Filter);
    if(this.filterId)
    {
      this.filterForm.value.name = this.filter.name;
      filterObs = this.filterService.updateFilters(this.filterForm.value as Filter, this.filterId);
    }
    const saveSub = filterObs.subscribe((res) => {
      this.toastService.presentToast('Filter saved successfully');
      this.navigate();
    });
    this.subscriptions.push(saveSub);
  }

  navigate() {
    this.router.navigate(['/admin/filters/']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
