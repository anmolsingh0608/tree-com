import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/admin/models/user.model';
import { AuthService } from 'src/app/admin/services/auth.service';
import { TreesService } from 'src/app/admin/services/trees.service';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';
declare function initApp();
declare function setTrees(trees);
declare function drawTreeData();
declare function getTreeIndex();
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  isModalOpen = false;
  subscriptions: Subscription[] = [];
  loading = true;
  selectedTreeId: number;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  constructor(private treesService: TreesService, private router: Router, private orderService: OrderService, private toastService: ToastService, private authService: AuthService) { }
  ngOnInit() {
  }

  ionViewDidEnter() {
    const treeSub = this.treesService.getTrees().subscribe((res: any) => {
      setTrees(res.data);
      drawTreeData();
      initApp();
      setTimeout(() => {
        this.selectedTreeId = getTreeIndex();
        this.loading = false;
      }, 1000);
    });

    this.subscriptions.push(treeSub);
  }

  order() {
    if (this.loading) {
      return;
    }
    this.orderService.orderData = { tree: this.selectedTreeId };
    const isFound = this.orderService.orderDataArray.some(ele => {
      return ele.tree == this.selectedTreeId;
    });
    console.log(isFound);
    if(!isFound){
      this.orderService.orderDataArray.push({ tree: this.selectedTreeId });
    }
    this.router.navigate(['/main/customer-details']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  setOpen(value) {
    this.authService.loginType = UserRole.FORESTER;
    this.isModalOpen = value;
  }

  draw() {
    this.router.navigate(['/main/drawing']);
  }

  login() {
    if(!this.loginForm.valid) {
      this.toastService.presentToast('Please enter valid credentials.');
      return;
    }
    if(!this.authService.isLoggedIn()) {
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          this.authService.setData(res.data);
          this.isModalOpen = false;
          this.toastService.presentToast('Login Successful.');
        }
      );
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.clearLocalStorage();
      this.toastService.presentToast('Logged Out.');
    });
  }
}
