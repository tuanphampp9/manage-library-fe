import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ModalDeleteComponent],
  imports: [CommonModule, NzModalModule],
  exports: [ModalDeleteComponent],
})
export class SharedModule {}
