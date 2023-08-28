import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'json-forms',
  templateUrl: './json-forms.component.html',
  styleUrls: ['./json-forms.component.css']
})
export class JsonFormsComponent implements OnInit {
  @Input() schema?: string = '';
  @Input() uischema?: string = '';
  @Input() data?: string = '';
  constructor() { }

  ngOnInit() {
  }

}
