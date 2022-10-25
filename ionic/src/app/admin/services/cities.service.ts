import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  createCity(city: City): Observable<Response<City>> {
    return this.http.post<Response<City>>(`${this.apiUrl}/city`, city);
  }

  getCities(): Observable<Response<City[]>> {
    return this.http.get<Response<City[]>>(`${this.apiUrl}/city`);
  }

  getCity(id: number): Observable<Response<City>> {
    return this.http.get<Response<City>>(`${this.apiUrl}/city/${id}`);
  }

  deleteCity(id: number) {
    return this.http.delete<Response<City>>(`${this.apiUrl}/city/${id}`);
  }

  updateCity(city: City, id): Observable<Response<City>> {
    return this.http.put<Response<City>>(`${this.apiUrl}/city/${id}`, city);
  }
}
