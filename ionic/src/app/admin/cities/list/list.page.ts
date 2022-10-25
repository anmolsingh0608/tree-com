import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { CitiesService } from '../../services/cities.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  cities: City[] = [];
  constructor(
    private cityService: CitiesService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const citySub = this.getCities().subscribe((res) => {
      this.cities = res.data;
    });

    this.subscriptions.push(citySub);
  }

  getCities() {
    return this.cityService.getCities();
  }

  async delete(id: number) {
    const alert = await this.alertController.create({
      header: 'Do you want to delete this city?',
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
            const deleteSub = this.cityService.deleteCity(id).subscribe((res: any) => {
              this.cities = this.cities.filter(city => city.id !== id);
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
