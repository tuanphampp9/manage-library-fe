import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCategoryRoutingModule } from './module-category-routing.module';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddCategoryComponent } from '../../components/add-category/add-category.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ListCategoryComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    ModuleCategoryRoutingModule,
    NzFormModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    FormsModule
  ],
})
export class ModuleCategoryModule {}
