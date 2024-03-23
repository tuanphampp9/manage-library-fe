import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibraryRes } from '../../interfaces/library-res';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { LibraryService } from '../../services/library.service';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-list-library',
  templateUrl: './list-library.component.html',
  styleUrl: './list-library.component.css',
})
export class ListLibraryComponent implements OnDestroy, OnInit {
  public listLibrary: LibraryRes[] = new Array<LibraryRes>();
  public pageSize: number = 8;
  public total: number = 10;
  public pageId: number = 1;
  public keywordLibrary: string = '';
  private searchInputSubscription: Subscription = new Subscription();
  private searchTextSubject = new Subject<string>();
  constructor(private libraryService: LibraryService) {
    this.searchInputSubscription = this.searchTextSubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(), //just action when change
        switchMap((keyword: string) => {
          this.pageId = 1; //set default pageId when search
          return this.libraryService.getListLibrary(
            this.pageSize,
            this.pageId,
            keyword
          );
        })
      )
      .subscribe((data: any) => {
        this.listLibrary = data.libraries_list;
        this.total = data.total_pages;
      });
  }
  ngOnInit(): void {
    this.libraryService
      .getListLibrary(this.pageSize, this.pageId)
      .subscribe((data: any) => {
        console.log(data);
        this.listLibrary = data.libraries_list;
        this.total = data.total_pages;
      });
  }
  ngOnDestroy(): void {
    if (this.searchInputSubscription) {
      this.searchInputSubscription.unsubscribe();
    }
  }

  public getPage(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.libraryService
      .getListLibrary(pageSize, pageIndex, this.keywordLibrary)
      .subscribe((data) => {
        this.total = data.total_pages;
        this.listLibrary = data.libraries_list;
      });
  }

  public onChangeText(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.keywordLibrary = keyword;
    this.searchTextSubject.next(keyword);
  }
}
