import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DynamicForm } from '../models';
import { Field } from '../models/field';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent implements OnInit, OnDestroy {
  @Input() field?: Field;
  @Output() close: EventEmitter<any> = new EventEmitter();
  labelControl = new FormControl('', [Validators.required]);
  propertyNameControl = new FormControl('', [Validators.required]);
  propertyTypeControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', []);
  requiredControl = new FormControl('', []);
  optionsControl = new FormControl('', []);
  constructor() {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.field = undefined;
  }
  onClose() {
    this.field = undefined;
    this.close.emit();
  }
  onCreateField() {
    if (this.labelControl.invalid || this.propertyNameControl.invalid) {
      return;
    }
    this.close.emit({
      lable: this.labelControl.value,
      name: this.propertyNameControl.value,
      type: this.propertyTypeControl.value,
      description: this.descriptionControl.value,
      required: this.requiredControl.value,
    });
    this.field = undefined;
  }
}
