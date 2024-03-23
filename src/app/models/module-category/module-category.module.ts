import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCategoryRoutingModule } from './module-category-routing.module';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [ListCategoryComponent],
  imports: [
    CommonModule,
    ModuleCategoryRoutingModule,
    NzFormModule,
    NzTableModule,
    NzInputModule,
  ],
})
export class ModuleCategoryModule {}
