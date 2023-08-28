import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicForm } from 'src/app/shared';
import { Field } from 'src/app/shared/models/field';
import { DynamicFormState } from 'src/app/store/counter/df.reducer';

@Component({
  selector: 'app-df-form',
  templateUrl: './df-form.component.html',
  styleUrls: ['./df-form.component.scss'],
})
export class DfFormComponent implements OnInit {
  showFiller = true;
  currentField?: Field;
  dynamicForm$: Observable<DynamicFormState>;
  constructor(private store: Store<{ dynamicForm: DynamicFormState }>) {
    this.dynamicForm$ = this.store.select('dynamicForm');
  }

  ngOnInit() {}
  onChangeField(field: Field) {
    this.currentField = field;
  }
}
