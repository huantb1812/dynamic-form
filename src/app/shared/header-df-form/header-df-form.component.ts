import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicFormState } from 'src/app/store/counter/df.reducer';

@Component({
  selector: 'app-header-df-form',
  templateUrl: './header-df-form.component.html',
  styleUrls: ['./header-df-form.component.css'],
})
export class HeaderDfFormComponent implements OnInit {

  dynamicForm$: Observable<DynamicFormState>;
  constructor(private store: Store<{ dynamicForm: DynamicFormState }>) {
    this.dynamicForm$ = this.store.select('dynamicForm');
  }
  ngOnInit() {}
}
