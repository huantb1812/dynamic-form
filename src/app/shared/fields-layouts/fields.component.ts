import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DynamicForm, FIELDS, LAYOUTS } from '../models';
import { DfComponent, TypeComponent } from '../models/df-component';
import { CdkDragExit, CdkDragMove, CdkDragRelease } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fieldslayouts = [...LAYOUTS, ...FIELDS];
  typeComponent = TypeComponent;
  @Output() changeField: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  disallowDropPredicate() {
    return false;
  }

  constructor() {}
  ngOnInit() {}
  onAddField(field: DfComponent) {
    this.changeField.emit(field);
  }
  onClose() {
    this.close.emit();
  }

  createItemClone(event: CdkDragExit<any>) {
    this.fieldslayouts.splice(
      event.container._dropListRef.getItemIndex(event.item._dragRef) + 1,
      0,
      {
        ...event.item.data,
        isClone: true,
      }
    );
  }
  dragMoved(event: CdkDragMove<DfComponent>) {
    // this.dragDropService.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    // this.dragDropService.dragReleased(event);

    this.removeItemClone();
  }
  removeItemClone() {
    this.fieldslayouts = this.fieldslayouts.filter((i) => !i.isClone);
  }
}
