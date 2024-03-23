import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorComponent } from '../../components/list-author/list-author.component';
import { AddAuthorComponent } from '../../components/add-author/add-author.component';

const routes: Routes = [
  {
    path: 'list-author',
    component: ListAuthorComponent,
  },
  {
    path: 'add-author',
    component: AddAuthorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAuthorRoutingModule {}
