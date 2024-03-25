import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthorDto } from '../interfaces/author-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  public readonly API_URL: string = environment.API_END_POINT;
  constructor(private http: HttpClient) {}
  public getListAuthor(
    pageSize: number,
    pageId: number,
    keyword: string = ''
  ): Observable<any> {
    const params = new HttpParams()
      .append('limit', pageSize)
      .append('page', pageId)
      .append('keyword', keyword);
    return this.http.get(`${this.API_URL}/authors`, { params: params });
  }
  public createAuthor(data: AuthorDto): Observable<any> {
    return this.http.post(`${this.API_URL}/authors`, data);
  }
}
