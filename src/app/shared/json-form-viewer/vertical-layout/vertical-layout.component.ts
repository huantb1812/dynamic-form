import { Component, Input, OnInit } from '@angular/core';
import { DfComponent } from '../../models/df-component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {
  doneList: DfComponent[] = [];

  @Input('connectedTo')
  connectedTo: string[];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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

      transferArrayItem(
        [event.item.data],
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


}
