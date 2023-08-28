import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DynamicForm, FIELDS } from '../models';
import { Field } from '../models/field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fields = FIELDS;
  @Output()changeField: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  onAddField(field: Field) {
    this.changeField.emit(field);
  }
}
