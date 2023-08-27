import { Component, OnInit } from '@angular/core';
import { DynamicForm } from 'src/app/shared';

@Component({
  selector: 'app-df-list',
  templateUrl: './df-list.component.html',
  styleUrls: ['./df-list.component.scss'],
})
export class DfListComponent implements OnInit {
  forms: DynamicForm[] = [
    {
      title: 'Dynamic form 001',
      lastUpdateTime: new Date(2023, 8, 1),
      status: 'closed',
    },
    {
      title: 'Dynamic form 002',
      lastUpdateTime: new Date(2023, 8, 2),
      status: 'opened',
    },
  ];
  filterForm: string = '';
  masterForms: DynamicForm[] = [
    {
      title: 'Master form 001',
      lastUpdateTime: new Date(2023, 8, 1),
      status: 'closed',
    },
    {
      title: 'Master form 002',
      lastUpdateTime: new Date(2023, 8, 2),
      status: 'opened',
    },
  ];
  filterMasterForm: string = '';

  constructor() {}

  ngOnInit() {}
}
