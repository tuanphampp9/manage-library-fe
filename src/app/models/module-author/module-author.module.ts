import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAuthorRoutingModule } from './module-author-routing.module';
import { ListAuthorComponent } from '../../components/list-author/list-author.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddAuthorComponent } from '../../components/add-author/add-author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ListAuthorComponent, AddAuthorComponent],
  imports: [
    CommonModule,
    ModuleAuthorRoutingModule,
    NzFormModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzButtonModule,
  ],
})
export class ModuleAuthorModule {}
