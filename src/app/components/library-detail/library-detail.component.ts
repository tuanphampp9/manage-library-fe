import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryRes } from '../../interfaces/library-res';
import { LibraryService } from '../../services/library.service';
import { BookRes } from '../../interfaces/book-res';
import { BookService } from '../../services/book.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { CategoryService } from '../../services/category.service';
import { convertDate } from '../../utils/common';
import { bookParams } from '../../interfaces/book-dto';
import {
  NzAutocompleteComponent,
  NzAutocompleteOptionComponent,
} from 'ng-zorro-antd/auto-complete';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './library-detail.component.css',
})
export class LibraryDetailComponent {
  public libraryObj: LibraryRes = {
    id: 1,
    name_lib: '',
    address: '',
    number_of_books: 1,
  };
  public nameBook: string = '';
  public codeBook: string = '';
  public categoryBook: string = '';
  public pageSize: number = 8;
  public pageId: number = 0;
  public total: number = 1;
  public keywordCategory: string = '';
  public dateOfPublication: string[] = new Array<string>();
  public listCategory: string[] = new Array<string>();
  public listBook: BookRes[] = new Array<BookRes>();
  constructor(
    private paramsUrl: ActivatedRoute,
    private libraryService: LibraryService,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {
    this.paramsUrl.params.subscribe((params) => {
      this.libraryService
        .getLibrary(params['id'])
        .subscribe((data) => (this.libraryObj = data));
    });
    this.bookService
      .getBookFollowLibId(this.libraryObj.id, this.pageSize, this.pageId)
      .subscribe((data) => {
        this.total = data.total_items;
        this.listBook = data.list_book;
      });
  }

  public getPage(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    const bookParam: bookParams = {
      isbn: this.codeBook,
      book_title: this.nameBook,
      category: this.keywordCategory,
      date_of_publication_from: '',
      date_of_publication_to: '',
    };
    if (this.dateOfPublication.length) {
      const dateFrom: string = convertDate(this.dateOfPublication[0]);
      const dateTo: string = convertDate(this.dateOfPublication[1]);
      bookParam.date_of_publication_from = dateFrom;
      bookParam.date_of_publication_to = dateTo;
    }
    this.pageId = pageIndex;
    this.pageSize = pageSize;
    this.bookService
      .getBookFollowLibId(this.libraryObj.id, pageSize, pageIndex, bookParam)
      .subscribe((data) => {
        this.total = data.total_items;
        this.listBook = data.list_book;
      });
  }

  public onInput(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.categoryService
      .getListCategory(5, 1, keyword)
      .subscribe(
        (data) =>
          (this.listCategory = data.categories_list.map(
            (cate: any) => cate.name_category
          ))
      );
  }

  public onSelect(option: NzAutocompleteOptionComponent): void {
    this.keywordCategory = option.nzValue;
  }

  public handleSearch(): void {
    const bookParam: bookParams = {
      isbn: this.codeBook,
      book_title: this.nameBook,
      category: this.keywordCategory,
      date_of_publication_from: '',
      date_of_publication_to: '',
    };
    if (this.dateOfPublication.length) {
      const dateFrom: string = convertDate(this.dateOfPublication[0]);
      const dateTo: string = convertDate(this.dateOfPublication[1]);
      bookParam.date_of_publication_from = dateFrom;
      bookParam.date_of_publication_to = dateTo;
    }
    this.bookService
      .getBookFollowLibId(
        this.libraryObj.id,
        this.pageSize,
        this.pageId,
        bookParam
      )
      .subscribe((data) => {
        this.listBook = data.list_book;
        this.total = data.total_items;
      });
  }

  public deleteBook(): void {}
}
