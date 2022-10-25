import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { ToastService } from 'src/app/services/toast.service';
import { User, UserRole } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
  });
  userData: any = {};
  userId: number;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    const paramSub = this.route.params.subscribe((params) => {
      if (params.id) {
        this.userId = params.id;
        const userSub = this.userService.getUser(params.id).subscribe((res: any) => {
          this.userData = res.data;
          this.userForm.patchValue(this.userData);
          this.userForm.get('password').clearValidators();
          this.userForm.get('password').updateValueAndValidity();
        });
        this.subscriptions.push(userSub);
      }
    });
    this.subscriptions.push(paramSub);
  }

  save() {

    if (this.userForm.invalid) {
      this.toastService.presentToast('Please fill all the required fields');
      return;
    }
    let saveFormObservable: Observable<Response<User>>;
    if (this.userId) {
      saveFormObservable = this.userService.updateUser(
        this.userForm.value,
        this.userId
      );
    } else {
      saveFormObservable = this.userService.createUser(this.userForm.value);
    }
    const saveSub = saveFormObservable.subscribe((res) => {
      this.toastService.presentToast('User saved successfully');
      this.navigateToList();
    }
    );

    this.subscriptions.push(saveSub);
  }

  navigateToList() {
    this.router.navigate(['/admin/users/']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
