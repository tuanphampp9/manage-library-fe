import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLibraryComponent } from '../../components/list-library/list-library.component';
import { LibraryDetailComponent } from '../../components/library-detail/library-detail.component';
import { AddLibraryComponent } from '../../components/add-library/add-library.component';

const routes: Routes = [
  {
    path: 'list-library',
    component: ListLibraryComponent,
  },
  {
    path: 'list-library/:id',
    component: LibraryDetailComponent,
  },
  {
    path: 'add-library',
    component: AddLibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleLibraryRoutingModule {}
