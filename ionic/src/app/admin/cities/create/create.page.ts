import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { ToastService } from 'src/app/services/toast.service';
import { CitiesService } from '../../services/cities.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  cityForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  cityId: number;
  city: City;
  constructor(
    private toastService: ToastService,
    private cityService: CitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const paramSub = this.route.params.subscribe((param) => {
      if(param.id) {
        this.cityId = param.id;
        const citySub = this.cityService.getCity(this.cityId).subscribe((res) => {
          this.city = res.data;
          this.cityForm.patchValue(this.city);
        });
        this.subscriptions.push(citySub);
      }
    })
    this.subscriptions.push(paramSub);
  }

  save(){
    if(!this.cityForm.valid) {
      this.toastService.presentToast("Please enter city");
      return;
    }
    let saveFormObservable: Observable<Response<City>>;
    saveFormObservable = this.cityService.createCity(this.cityForm.value);

    if(this.cityId)
    {
      saveFormObservable = this.cityService.updateCity(this.cityForm.value, this.cityId);
    }
    const saveSub = saveFormObservable.subscribe((res) => {
      this.navigate();
    });
    this.subscriptions.push(saveSub);
  }

  navigate() {
    this.router.navigate(['admin/cities']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
