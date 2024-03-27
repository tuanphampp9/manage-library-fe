import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { bookParams } from '../interfaces/book-dto';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public readonly API_URL: string = environment.API_END_POINT;
  constructor(private http: HttpClient) {}

  public getBookFollowLibId(
    libraryId: number,
    pageSize: number,
    pageId: number,
    bookObj?: bookParams
  ): Observable<any> {
    let params = new HttpParams()
      .append('limit', pageSize)
      .append('page', pageId);
    if (bookObj?.isbn) {
      params = params.append('isbn', bookObj.isbn);
    }
    if (bookObj?.book_title) {
      params = params.append('book_title', bookObj.book_title);
    }
    if (bookObj?.category) {
      params = params.append('category', bookObj.category);
    }
    if (bookObj?.date_of_publication_from) {
      params = params.append(
        'date_of_publication_from',
        bookObj.date_of_publication_from
      );
    }
    if (bookObj?.date_of_publication_to) {
      params = params.append(
        'date_of_publication_to',
        bookObj.date_of_publication_to
      );
    }
    return this.http.get(`${this.API_URL}/books/lib/${libraryId}`, {
      params: params,
    });
  }

  public async deleteBookService(bookId: number) {
    await this.http
      .delete(`${this.API_URL}/books/${bookId}`)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    // return await this.http.delete(`${this.API_URL}/books/${bookId}`);
  }

  public getBook(bookId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/books/${bookId}`);
  }
}
