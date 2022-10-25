import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { Response } from 'src/app/models/response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(filter: Filter): Observable<Response<Filter[]>> {
    return this.http.post<Response<Filter[]>>(`${this.apiUrl}/filters`, filter);
  }

  getFilters(): Observable<Response<Filter[]>> {
    return this.http.get<Response<Filter[]>>(`${this.apiUrl}/filters`);
  }

  updateFilters(filter: Filter, id): Observable<Response<Filter[]>> {
    return this.http.put<Response<Filter[]>>(`${this.apiUrl}/filters/${id}`, filter);
  }

  getFilter(id): Observable<Response<Filter>> {
    return this.http.get<Response<Filter>>(`${this.apiUrl}/filters/${id}`);
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/filters/${id}`);
  }
}
