import { Component, Input, OnInit } from '@angular/core';
import { angularMaterialRenderers } from '../../json-forms-angular-material';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';
@Component({
  selector: 'app-json-forms',
  templateUrl: './json-forms.component.html',
  styleUrls: ['./json-forms.component.css'],
})
export class JsonFormsComponent implements OnInit {
  renderers = angularMaterialRenderers;
  @Input() schema: JsonSchema;
  @Input() uischema: UISchemaElement;
  @Input() data?: string = '';

  newValue: any;
  constructor() {}

  ngOnInit() {}
  onChangeModel(event: any) {
    this.newValue = event;
    // console.log(event);
  }
  onSubmit() {
    console.log(this.newValue);
  }
}
