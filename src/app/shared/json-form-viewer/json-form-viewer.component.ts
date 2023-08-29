import { Component, Input, OnInit } from '@angular/core';
// import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-json-form-viewer',
  templateUrl: './json-form-viewer.component.html',
  styleUrls: ['./json-form-viewer.component.scss'],
})
export class JsonFormViewerComponent {
  @Input() schema: any;
  @Input() uischema: any;
  @Input() data: any;
}
