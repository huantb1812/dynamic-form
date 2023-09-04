import { Component, OnInit } from '@angular/core';
import { DfComponent } from '../../models/df-component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-horizoltal-layout',
  templateUrl: './horizoltal-layout.component.html',
  styleUrls: ['./horizoltal-layout.component.scss']
})
export class HorizoltalLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  timePeriods: DfComponent[] = [];

  drop2(event: CdkDragDrop<any[]>) {
    // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        [event.item.data],
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
