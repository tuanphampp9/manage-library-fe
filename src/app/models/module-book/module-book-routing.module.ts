import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from '../../components/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'book/:id',
    component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleBookRoutingModule {}
