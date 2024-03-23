import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from '../../components/list-category/list-category.component';
import { AddCategoryComponent } from '../../components/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'list-category',
    component: ListCategoryComponent,
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCategoryRoutingModule {}
