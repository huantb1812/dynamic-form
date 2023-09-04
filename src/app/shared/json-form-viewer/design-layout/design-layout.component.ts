import { Component, Input, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { DfComponent } from '../../models/df-component';
import { FIELDS, LAYOUTS } from '../../models';
@Component({
  selector: 'app-design-layout',
  templateUrl: './design-layout.component.html',
  styleUrls: ['./design-layout.component.scss'],
})
export class DesignLayoutComponent implements OnInit {

  ngOnInit() {}

}
