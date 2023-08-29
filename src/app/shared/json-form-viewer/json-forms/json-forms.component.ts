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

  // renderers = angularMaterialRenderers;
  uischema1 = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        label: false,
        scope: '#/properties/done',
      },
      {
        type: 'Control',
        scope: '#/properties/name',
      },
      {
        type: 'HorizontalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/due_date',
          },
          {
            type: 'Control',
            scope: '#/properties/recurrence',
          },
        ],
      },
    ],
  };
  schema1 = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      done: {
        type: 'boolean',
      },
      due_date: {
        type: 'string',
        format: 'date',
      },
      recurrence: {
        type: 'string',
        enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
      },
    },
    required: ['name', 'due_date'],
  };
  data1 = {};
}
  constructor() { }

  ngOnInit() {
  }

}
