import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DynamicForm } from '../models';
import { Field } from '../models/field';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent implements OnInit, OnDestroy {
  @Input() field?: Field;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.field = undefined;
  }
  onClose(){
    this.field= undefined;
    this.close.emit();
  }
}
