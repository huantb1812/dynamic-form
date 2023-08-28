import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from 'src/app/shared';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DialogInitANewDfComponent } from 'src/app/shared/dialog-init-a-new-df/dialog-init-a-new-df.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { initNewDfForm } from 'src/app/store/counter/df.actions';
import { DynamicFormState } from 'src/app/store/counter/df.reducer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-df-list',
  templateUrl: './df-list.component.html',
  styleUrls: ['./df-list.component.scss'],
})
export class DfListComponent implements OnInit {
  dynamicForm$: Observable<DynamicFormState>;
  forms: DynamicForm[] = [];
  filterForm: string = '';
  masterForms: DynamicForm[] = [];
  filterMasterForm: string = '';

  constructor(
    private router: Router,
    public dialog: Dialog,
    private store: Store<{ dynamicForm: DynamicFormState }>,
    private http: HttpClient
  ) {
    this.dynamicForm$ = this.store.select('dynamicForm');
    this.http.get('http://localhost:3000/dynamicForms').subscribe((res) => {
      this.forms = res as DynamicForm[];
    });
    this.http.get('http://localhost:3000/masterForms').subscribe((res) => {
      this.masterForms = res as DynamicForm[];
    });
  }

  ngOnInit() {}
  onCreateForm() {
    const creationDialog = this.dialog.open<string>(DialogInitANewDfComponent);

    creationDialog.closed.subscribe((result?: string) => {
      if (result != null) {
        this.store.dispatch(initNewDfForm({ name: result }));
        console.log('form name:', result);
        this.router.navigateByUrl('/create');
      }
    });
  }
  onEdit(id: string) {
    this.router.navigateByUrl('/edit/' + id);
  }
  onPreview(id: string) {
    this.router.navigateByUrl('/preview/' + id);
  }
  onDuplicate(id: string) {
    this.router.navigateByUrl('/');
  }
  onShare(id: string) {
    this.router.navigateByUrl('/');
  }
}
