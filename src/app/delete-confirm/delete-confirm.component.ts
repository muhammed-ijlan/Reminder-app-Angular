import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css'],
})
export class DeleteConfirmComponent implements OnInit {
  constructor() {}

  @Input() item: string | any;
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  delete() {
    this.onDelete.emit(this.item);
  }
  cancel() {
    this.onCancel.emit();
  }

  ngOnInit(): void {}
}
