import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from 'src/app/shared';
import { Dialog } from '@angular/cdk/dialog';
import { DialogInitANewDfComponent } from 'src/app/shared/dialog-init-a-new-df/dialog-init-a-new-df.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DynamicFormState } from 'src/app/store/counter/df.reducer';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-df-list',
  templateUrl: './df-list.component.html',
  styleUrls: ['./df-list.component.scss'],
})
export class DfListComponent implements OnInit {
  forms: DynamicForm[] = [];
  filterForm: string = '';
  masterForms: DynamicForm[] = [];
  filterMasterForm: string = '';

  constructor(
    private router: Router,
    public dialog: Dialog,
    private store: Store<{ dynamicForm: DynamicFormState }>,
    private http: HttpClient,
    private datepipe: DatePipe
  ) {
    this.getDynamicForms();
    this.getMasterForms();
  }

  ngOnInit() {}
  onCreateForm() {
    const creationDialog = this.dialog.open<string>(DialogInitANewDfComponent);

    creationDialog.closed.subscribe((result?: string) => {
      if (result != null) {
        const data = {
          id: uuidv4(),
          name: result,
          title: result,
          lastUpdateTime: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
          status: 'closed',
          schema: {
            type: 'object',
            properties: {},
            required: [],
          },
          uischema: {
            type: 'VerticalLayout',
            elements: [],
          },
          data: {},
        };
        this.http
          .post('http://localhost:3000/dynamicForms', data)
          .subscribe((_) => {
            this.getDynamicForms();
          });
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
  getDynamicForms() {
    this.http.get('http://localhost:3000/dynamicForms').subscribe((res) => {
      this.forms = res as DynamicForm[];
    });
  }
  getMasterForms() {
    this.http.get('http://localhost:3000/masterForms').subscribe((res) => {
      this.masterForms = res as DynamicForm[];
    });
  }
}
