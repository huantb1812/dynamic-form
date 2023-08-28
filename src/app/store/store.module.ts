import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dynamicFormReducer } from './counter/df.reducer';
// import { StoreModule } from '@ngrx/store';
@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forRoot({ dynamicForm: dynamicFormReducer }),
  ],
  declarations: []
})
export class StoreModule { }
