import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  public nameCategory: string = '';
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  public addCategory() {
    this.categoryService
      .createCategory({ name_category: this.nameCategory })
      .subscribe((data) => console.log(data));
    this.router.navigate(['/category/list-category']);
  }
}
