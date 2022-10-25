import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserRole } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private tostService: ToastService, private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  ionviewDidEnter() {
    this.authService.loginType = UserRole.ADMIN;
  }

  login() {
    if (this.loginForm.invalid) {
      this.tostService.presentToast('Please enter valid credentials.');
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        this.authService.setData(res.data);
        this.router.navigateByUrl('/admin');
      }
    );
  }

  goBack() {
    this.router.navigate(['/main/trees']);
  }
}
