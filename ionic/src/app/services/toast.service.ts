import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) {
  }

  async presentToast(message: string, duration: number = 2000): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }
}
