import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-create-dynamic-component',
  templateUrl: './create-dynamic-component.component.html',
  styleUrls: ['./create-dynamic-component.component.scss'],
})
export class CreateDynamicComponentComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        this.todo,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
