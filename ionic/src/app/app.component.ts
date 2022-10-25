import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private toastCtrl: ToastController) {}
  async ngOnInit(): Promise<void> {
    if (!this.swUpdate.isEnabled) {
      return;
    }
    const isUpdateAvailable = await this.swUpdate.checkForUpdate();
    if (!isUpdateAvailable) {
      return;
    }
    const toast = await this.toastCtrl.create({
      message: 'Update available',
      buttons: [
        {
          text: 'Reload',
          handler: () => {
            this.swUpdate.activateUpdate().then(() => {
              window.location.reload();
            });
          }
        }
      ],
      duration: 10000
    });
    await toast.present();
  }
}
