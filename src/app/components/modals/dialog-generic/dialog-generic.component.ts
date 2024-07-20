import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlockableUI } from 'primeng/api';

@Component({
  selector: 'dialog-generic',
  templateUrl: './dialog-generic.component.html',
  styleUrl: './dialog-generic.component.scss',
})
export class DialogGenericComponent {
  @Output() onValidate = new EventEmitter<void>();
  @Output() onClear = new EventEmitter<void>();
  @Input() cityName!: string;
  @Input() active = false;

  validate() {
    this.onValidate.emit();
    this.onClear.emit();
  }
  cancel() {
    this.onClear.emit();
  }
}
