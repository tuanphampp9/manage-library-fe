import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public readonly API_URL: string = environment.API_END_POINT;
  constructor(private http: HttpClient) {}
  public getListCategory(
    pageSize: number,
    pageId: number,
    keyword: string = ''
  ): Observable<any> {
    const params = new HttpParams()
      .append('limit', pageSize)
      .append('page', pageId)
      .append('keyword', keyword);
    return this.http.get(`${this.API_URL}/categories`, { params: params });
  }
}
