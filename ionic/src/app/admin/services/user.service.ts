import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getUsers(): Observable<Response<User[]>> {
    return this.http.get<Response<User[]>>(`${this.apiUrl}/users`);
  }

  getUser(id) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  createUser(userData): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.apiUrl}/users`, userData);
  }

  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  updateUser(user, id): Observable<Response<User>> {
    return this.http.put<Response<User>>(`${this.apiUrl}/users/${id}`, user);
  }
}
