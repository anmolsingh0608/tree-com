import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image, ImageTypes } from '../models/image.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl;
  orderData: any;
  orderDataArray: any[] = [];
  customerData: any;
  constructor(private http: HttpClient) { }

  createCustomer(data): Observable<Response<any>> {
    return this.http.post<Response<any>>(`${this.apiUrl}/customers`, data);
  }

  createOrder(data): Observable<Response<any>> {
    return this.http.post<Response<any>>(`${this.apiUrl}/orders`, [data]);
  }

  getCustomer(id): Observable<Response<any>> {
    return this.http.get<Response<any>>(`${this.apiUrl}/customers/${id}`);
  }

  getOrder(id): Observable<Response<any>> {
    let queryParams = new HttpParams().append("populate", "customer,tree,yardSketchImage");
    return this.http.get<Response<any>>(`${this.apiUrl}/orders/${id}`, {params:queryParams});
  }

  getOrders(): Observable<Response<any>> {
    let queryParams = new HttpParams().append("populate", "customer,tree,yardSketchImage");
    return this.http.get<Response<any>>(`${this.apiUrl}/orders`, {params:queryParams});
  }

  uploadYardSketch(base64: string): Observable<Response<Image>> {
    return this.http.post<Response<Image>>(`${this.apiUrl}/images`, { photo: base64, type: ImageTypes.YARD_SKETCH });
  }

  orderExport(){
    return this.http.get(`${this.apiUrl}/orders/export`, {responseType: 'arraybuffer'});
  }

  sendToNursery(){
    return this.http.get(`${this.apiUrl}/orders/export?pending`, {responseType: 'arraybuffer'});
  }

  getYardSketch(id): Observable<Response<Image>> {
    return this.http.get<Response<Image>>(`${this.apiUrl}/images/${id}`);
  }

  deleteImage(id) {
    return this.http.delete(`${this.apiUrl}/images/${id}`);
  }
}
