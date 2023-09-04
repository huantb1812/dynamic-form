import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DfListComponent } from './pages/df-list/df-list.component';
import { DfFormComponent } from './pages/df-form/df-form.component';
import { DfPreviewComponent } from './pages/df-preview/df-preview.component';
import { DynamicFormResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    component: DfListComponent,
  },
  {
    path: 'create',
    component: DfFormComponent,
  },
  {
    path: 'edit/:id',
    component: DfFormComponent,
    resolve: {
      dynamicForm: DynamicFormResolver,
    },
  },
  {
    path: 'preview/:id',
    component: DfPreviewComponent,
    resolve: {
      dynamicForm: DynamicFormResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
