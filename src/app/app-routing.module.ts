import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DfListComponent } from './pages/df-list/df-list.component';
import { DfFormComponent } from './pages/df-form/df-form.component';
import { DfPreviewComponent } from './pages/df-preview/df-preview.component';

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
  },
  {
    path: 'preview/:id',
    component: DfPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
