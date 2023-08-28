import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
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
  selected?: DynamicForm;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(map((res) => res['dynamicForm']))
      .subscribe((res) => {
        this.selected = res;
      });
  }

  ngOnInit() {}
  onChangeField(field: Field) {
    this.currentField = field;
  }
  onClose(field: Field) {
    debugger;
    if (field) {
      console.log(field);
      this.currentField = undefined;
    } else {
      this.currentField = undefined;
    }
  }
}
