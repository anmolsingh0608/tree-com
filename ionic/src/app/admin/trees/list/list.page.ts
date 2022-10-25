import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TreesService } from '../../services/trees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  trees = [];
  constructor(private treesService: TreesService, private alertController: AlertController) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    const treeSub = this.getTrees().subscribe((res: any) => {
      this.trees = res.data;
    });
    this.subscriptions.push(treeSub);
  }

  getTrees() {
    return this.treesService.getTrees();
  }

  async deleteTree(id) {
    const alert = await this.alertController.create({
      header: 'Do you want to delete this tree?',
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
            const deleteSub = this.treesService.deleteTree(id).subscribe((res: any) => {
              this.trees = this.trees.filter(tree => tree.id !== id);
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
