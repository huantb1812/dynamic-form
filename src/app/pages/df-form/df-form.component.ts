import { Component, OnInit } from '@angular/core';
import { DynamicForm } from 'src/app/shared';
import { Field } from 'src/app/shared/models/field';

@Component({
  selector: 'app-df-form',
  templateUrl: './df-form.component.html',
  styleUrls: ['./df-form.component.scss'],
})
export class DfFormComponent implements OnInit {
  showFiller = true;
  currentField?: Field;
  constructor() {}

  ngOnInit() {}
  onChangeField(field: Field) {
    this.currentField = field;
  }
}
