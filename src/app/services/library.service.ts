import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  public readonly API_URL: string = environment.API_END_POINT;
  constructor(private http: HttpClient) {}

  public getListLibrary(
    pageSize: number,
    pageId: number,
    keyword: string = ''
  ): Observable<any> {
    const params = new HttpParams()
      .append('limit', pageSize)
      .append('page', pageId)
      .append('keyword', keyword);
    return this.http.get(`${this.API_URL}/libraries`, { params: params });
  }

  public getLibrary(libraryId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/libraries/${libraryId}`);
  }

  public createLibrary(formData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/libraries`, formData);
  }

  public uploadImage(listFile: any): Observable<any> {
    return this.http.post(`${this.API_URL}/books/images`, listFile);
  }
}
