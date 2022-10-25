import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image, ImageTypes } from 'src/app/models/image.model';
import { Response } from 'src/app/models/response.model';
import { Tree } from 'src/app/models/tree.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getTrees(): Observable<Response<Tree[]>> {
    return this.http.get<Response<Tree[]>>(`${this.apiUrl}/trees`).pipe(map(res =>{
      const trees = res.data.map((tree) => {
        const treeTemp = tree;
        treeTemp.images = tree.images.map((image) => {
          return {
            ...image,
            path: `${environment.webUrl}/${image.path}`
          };
        });
        return treeTemp;
      });
      return res;
    }));
  }

  getTree(id): Observable<Response<Tree>> {
    return this.http.get<Response<Tree>>(`${this.apiUrl}/trees/${id}`);
  }

  createTree(tree: Tree): Observable<Response<Tree>> {
    return this.http.post<Response<Tree>>(`${this.apiUrl}/trees`, tree);
  }

  updateTree(tree): Observable<Response<Tree>> {
    const treeData = JSON.parse(JSON.stringify(tree));
    delete treeData.id;
    return this.http.put<Response<Tree>>(`${this.apiUrl}/trees/${tree.id}`, treeData);
  }

  deleteTree(id) {
    return this.http.delete(`${this.apiUrl}/trees/${id}`);
  }

  createImage(photo: string, type: ImageTypes): Observable<Response<Image>> {
    const body = {
      photo,
      type
    };
    return this.http.post<Response<Image>>(`${this.apiUrl}/images`, body);
  }

  getImage(id): Observable<Response<Image>> {
    return this.http.get<Response<Image>>(`${this.apiUrl}/images/${id}`);
  }

  deleteImage(id) {
    return this.http.delete(`${this.apiUrl}/images/${id}`);
  }
}
