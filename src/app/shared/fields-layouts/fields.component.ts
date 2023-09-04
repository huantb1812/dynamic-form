import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DynamicForm, FIELDS, LAYOUTS } from '../models';
import { DfComponent, TypeComponent } from '../models/df-component';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fieldslayouts = [...LAYOUTS, ...FIELDS];
  typeComponent = TypeComponent;
  @Output() changeField: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  onAddField(field: DfComponent) {
    this.changeField.emit(field);
  }
  onClose() {
    this.close.emit();
  }
}
