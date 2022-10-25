import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../admin/services/auth.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { UserRole } from '../admin/models/user.model';

@Injectable()
export class HttpFailureInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        (err) => {
          if (err.error.message) {
            this.toastService.presentToast(err.error.message, 3000);
          }
          if (err instanceof HttpErrorResponse) {
            console.log(this.authService.loginType);
            if (this.authService.loginType === UserRole.ADMIN) {
              if (err.status === 401) {
                this.router.navigate(['admin/auth']);
              }
              if (err.status === 403) {
                this.router.navigate(['admin/auth']);
              }
            }
            this.authService.clearLocalStorage();
          }
        }
      )
    );
  }
}
