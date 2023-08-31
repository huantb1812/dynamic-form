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
import { Field } from '../../models/field';
import { FIELDS, LAYOUTS } from '../../models';
@Component({
  selector: 'app-design-layout',
  templateUrl: './design-layout.component.html',
  styleUrls: ['./design-layout.component.css'],
})
export class DesignLayoutComponent implements OnInit {
  doneList: Field[] = [];

  @Input('connectedTo')
  connectedTo: string[];
  constructor() {}

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );

      transferArrayItem([event.item.data],
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // if (event.previousContainer.id === event.container.id) {
    //   // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   copyArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex
    //   );
    // }
  }

  ngOnInit() {}
}
