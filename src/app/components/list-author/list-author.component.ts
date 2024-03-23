import { Component } from '@angular/core';
import { AuthorRes } from '../../interfaces/author-res';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { AuthorService } from '../../services/author.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrl: './list-author.component.css',
})
export class ListAuthorComponent {
  public listAuthor: AuthorRes[] = new Array<AuthorRes>();
  public pageId: number = 1;
  public pageSize: number = 8;
  public total: number = 1;
  private searchInputSubscription: Subscription = new Subscription();
  public keywordAuthor: string = '';
  private searchTextSubject = new Subject<string>();
  constructor(private authorService: AuthorService) {
    this.searchInputSubscription = this.searchTextSubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(), //just action when change
        switchMap((keyword: string) => {
          this.pageId = 1; //set default pageId when search
          return this.authorService.getListAuthor(
            this.pageSize,
            this.pageId,
            keyword
          );
        })
      )
      .subscribe((data: any) => {
        this.listAuthor = data.authors_list;
        this.total = data.total_pages;
      });
  }
  ngOnDestroy(): void {
    if (this.searchInputSubscription) {
      this.searchInputSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.authorService
      .getListAuthor(this.pageSize, this.pageId)
      .subscribe((data: any) => {
        this.listAuthor = data.authors_list;
        this.total = data.total_pages;
      });
  }
  public onChangeText(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.keywordAuthor = keyword;
    this.searchTextSubject.next(keyword);
  }

  public getPage(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.authorService
      .getListAuthor(pageSize, pageIndex, this.keywordAuthor)
      .subscribe((data) => {
        this.total = data.total_pages;
        this.listAuthor = data.authors_list;
      });
  }
}
