import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAuthorRoutingModule } from './module-author-routing.module';
import { ListAuthorComponent } from '../../components/list-author/list-author.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [ListAuthorComponent],
  imports: [
    CommonModule,
    ModuleAuthorRoutingModule,
    NzFormModule,
    NzTableModule,
    NzInputModule,
  ],
})
export class ModuleAuthorModule {}
