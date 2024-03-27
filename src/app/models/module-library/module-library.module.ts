import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ModuleLibraryRoutingModule } from './module-library-routing.module';
import { ListLibraryComponent } from '../../components/list-library/list-library.component';
import { LibraryDetailComponent } from '../../components/library-detail/library-detail.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddLibraryComponent } from '../../components/add-library/add-library.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SharedModule } from '../../shared/shared/shared.module';
@NgModule({
  declarations: [
    ListLibraryComponent,
    LibraryDetailComponent,
    AddLibraryComponent,
  ],
  imports: [
    CommonModule,
    ModuleLibraryRoutingModule,
    NzTableModule,
    NzInputModule,
    NzFormModule,
    NzAutocompleteModule,
    FormsModule,
    NzDatePickerModule,
    NzButtonModule,
    NzIconModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDividerModule,
    NzUploadModule,
    SharedModule,
  ],
})
export class ModuleLibraryModule {}
