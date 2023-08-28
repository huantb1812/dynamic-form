import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicForm } from 'src/app/shared';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { DialogInitANewDfComponent } from 'src/app/shared/dialog-init-a-new-df/dialog-init-a-new-df.component';

@Component({
  selector: 'app-df-list',
  templateUrl: './df-list.component.html',
  styleUrls: ['./df-list.component.scss'],
})
export class DfListComponent implements OnInit {
  forms: DynamicForm[] = [
    {
      id: '1',
      title: 'Dynamic form 001',
      lastUpdateTime: new Date(2023, 8, 1),
      status: 'closed',
    },
    {
      id: '2',
      title: 'Dynamic form 002',
      lastUpdateTime: new Date(2023, 8, 2),
      status: 'opened',
    },
  ];
  filterForm: string = '';
  masterForms: DynamicForm[] = [
    {
      id: '3',
      title: 'Master form 001',
      lastUpdateTime: new Date(2023, 8, 1),
      status: 'closed',
    },
    {
      id: '4',
      title: 'Master form 002',
      lastUpdateTime: new Date(2023, 8, 2),
      status: 'opened',
    },
  ];
  filterMasterForm: string = '';

  constructor(private router: Router, public dialog: Dialog) {}

  ngOnInit() {}
  onCreateForm() {
    const creationDialog = this.dialog.open<string>(DialogInitANewDfComponent);
    creationDialog.closed.subscribe((result) => {
      console.log('form name:', result);
      this.router.navigateByUrl('/create');
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
