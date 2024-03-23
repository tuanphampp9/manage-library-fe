import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBookRoutingModule } from './module-book-routing.module';
import { BookDetailComponent } from '../../components/book-detail/book-detail.component';
import { NzImageModule } from 'ng-zorro-antd/image';
@NgModule({
  declarations: [BookDetailComponent],
  imports: [CommonModule, ModuleBookRoutingModule, NzImageModule],
})
export class ModuleBookModule {}
