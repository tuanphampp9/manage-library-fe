import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookRes } from '../../interfaces/book-res';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  public bookObj: BookRes = {
    id: 1,
    book_title: '',
    category: {
      id: 1,
      name_category: '',
      number_of_books: 1,
    },
    date_of_publication: '',
    isbn: '',
  };
  constructor(
    private paramsUrl: ActivatedRoute,
    private bookService: BookService
  ) {
    this.paramsUrl.params.subscribe((params) => {
      this.bookService.getBook(params['id']).subscribe((data) => {
        this.bookObj = data;
        console.log(data);
      });
    });
  }
}
