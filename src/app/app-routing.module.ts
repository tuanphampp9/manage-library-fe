import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/library/list-library' },
  {
    path: 'library',
    loadChildren: () =>
      import('./models/module-library/module-library.module').then(
        (m) => m.ModuleLibraryModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./models/module-category/module-category.module').then(
        (m) => m.ModuleCategoryModule
      ),
  },
  {
    path: 'author',
    loadChildren: () =>
      import('./models/module-author/module-author.module').then(
        (m) => m.ModuleAuthorModule
      ),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./models/module-book/module-book.module').then(
        (m) => m.ModuleBookModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
