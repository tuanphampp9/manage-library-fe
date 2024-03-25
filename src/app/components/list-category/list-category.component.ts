import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { CategoryRes } from '../../interfaces/category-res';
import { CategoryService } from '../../services/category.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css',
})
export class ListCategoryComponent implements OnInit, OnDestroy {
  public listCategories: CategoryRes[] = new Array<CategoryRes>();
  public pageId: number = 1;
  public pageSize: number = 8;
  public total: number = 1;
  private searchInputSubscription: Subscription = new Subscription();
  public keywordCategory: string = '';
  private searchTextSubject = new Subject<string>();
  constructor(private categoryService: CategoryService) {
    this.searchInputSubscription = this.searchTextSubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(), //just action when change
        switchMap((keyword: string) => {
          this.pageId = 1; //set default pageId when search
          return this.categoryService.getListCategory(
            this.pageSize,
            this.pageId,
            keyword
          );
        })
      )
      .subscribe((data: any) => {
        this.listCategories = data.categories_list;
        this.total = data.total_items;
      });
  }
  ngOnDestroy(): void {
    if (this.searchInputSubscription) {
      this.searchInputSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.categoryService
      .getListCategory(this.pageSize, this.pageId)
      .subscribe((data: any) => {
        this.listCategories = data.categories_list;
        this.total = data.total_items;
      });
  }
  public onChangeText(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.keywordCategory = keyword;
    this.searchTextSubject.next(keyword);
  }

  public getPage(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.categoryService
      .getListCategory(pageSize, pageIndex, this.keywordCategory)
      .subscribe((data) => {
        this.total = data.total_items;
        this.listCategories = data.categories_list;
      });
  }
}
