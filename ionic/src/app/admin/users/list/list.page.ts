import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  users: User[] = [];
  constructor(private userService: UserService, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const userSub = this.getUsers().subscribe((res) => {
      this.users = res.data;
    });
    this.subscriptions.push(userSub);
  }

  getUsers() {
    return this.userService.getUsers();
  }

  async deleteUser(id: number){
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
            const deleteSub = this.userService.deleteUser(id).subscribe((res: any) => {
              this.users = this.users.filter(user => user.id !== id);
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
