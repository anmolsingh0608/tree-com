import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/credentials.model';
import { Response } from '../../models/response.model';
import { TokenData } from '../models/token-data.model';
import { UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  loginType: UserRole;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Credentials): Observable<Response<TokenData>> {
    return this.http.post<Response<TokenData>>(`${this.apiUrl}/login`, data);
  }

  logout(): Observable<Response<null>> {
    return this.http.post<Response<null>>(`${this.apiUrl}/logout`, {});
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  getRole(): UserRole {
    return localStorage.getItem('role') as UserRole;
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
  }
  clearLocalStorage(): void {
    localStorage.clear();
  }

  autoLogin(): void {
    if (this.isLoggedIn()) {
      this.router.navigate(['/admin/users']);
    }
  }

  setData(data) {
    localStorage.setItem('token', data.token.plainTextToken);
    localStorage.setItem('role', data.user.role);
    localStorage.setItem('id', data.user.id);
  }

  isForesterLoggedIn() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return !!token && role == UserRole.FORESTER;
  }
}
