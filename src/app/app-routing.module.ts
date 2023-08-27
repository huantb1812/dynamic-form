import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DfListComponent } from './pages/df-list/df-list.component';

const routes: Routes = [
  {
    path: '',
    component: DfListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
