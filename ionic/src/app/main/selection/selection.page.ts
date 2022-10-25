import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/admin/models/user.model';
import { AuthService } from 'src/app/admin/services/auth.service';
import { TreesService } from 'src/app/admin/services/trees.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
declare function setTrees(trees);
declare function resetFilters();
declare function initApp();
declare function initTrees();
@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit, OnDestroy {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  isModalOpen = false;
  subscriptions: Subscription[] = [];
  webUrl = environment.webUrl;
  loading = true;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  constructor(
    private treesService: TreesService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}
  ngOnInit() {
    const treeSub = this.treesService.getTrees().subscribe((res) => {
      setTrees(res.data);
      resetFilters();
      initTrees();
      initApp();
      this.loading = false;
    });

    this.subscriptions.push(treeSub);
  }

  ionViewDidEnter() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.clearLocalStorage();
      this.toastService.presentToast('Logged Out.');
    });
  }

  setOpen(value) {
    this.authService.loginType = UserRole.FORESTER;
    this.isModalOpen = value;
  }

  login() {
    if (!this.loginForm.valid) {
      this.toastService.presentToast('Please enter valid credentials.');
      return;
    }
    if (!this.authService.isLoggedIn()) {
      this.authService.login(this.loginForm.value).subscribe((res) => {
        this.authService.setData(res.data);
        this.isModalOpen = false;
        this.toastService.presentToast('Login Successful.');
        // }
      });
    }
  }

  draw() {
    this.router.navigate(['/main/drawing']);
  }
}
