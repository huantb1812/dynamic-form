import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-form-viewer',
  templateUrl: './json-form-viewer.component.html',
  styleUrls: ['./json-form-viewer.component.scss'],
})
export class JsonFormViewerComponent {
  @Input() schema?: string = '';
  @Input() uischema?: string = '';
  @Input() data?: string = '';
}
