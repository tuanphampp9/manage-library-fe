import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css',
})
export class ModalDeleteComponent {
  @Input() isVisible: boolean = false;
  @Input() nameBook: string = '';
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() isConfirm: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  public handleCancel() {
    this.isVisibleChange.emit(false);
    this.isConfirm.emit(false);
  }
  public handleOk() {
    this.isVisibleChange.emit(false);
    this.isConfirm.emit(true);
  }
}
