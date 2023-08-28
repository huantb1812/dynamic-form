import { Component, Input, OnInit } from '@angular/core';
// import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-json-form-viewer',
  templateUrl: './json-form-viewer.component.html',
  styleUrls: ['./json-form-viewer.component.scss'],
})
export class JsonFormViewerComponent {
  @Input() schema?: string = '';
  @Input() uischema?: string = '';
  @Input() data?: string = '';
  // uischema = {
  //   type: 'VerticalLayout',
  //   elements: [
  //     {
  //       type: 'Control',
  //       label: 'Completed',
  //       scope: '#/properties/done'
  //     },
  //     {
  //       type: 'Control',
  //       scope: '#/properties/name'
  //     },
  //     {
  //       type: 'HorizontalLayout',
  //       elements: [
  //         {
  //           type: 'Control',
  //           scope: '#/properties/due_date'
  //         },
  //         {
  //           type: 'Control',
  //           scope: '#/properties/rating'
  //         }
  //       ]
  //     },
  //     {
  //       type: 'HorizontalLayout',
  //       elements: [
  //         {
  //           type: 'Control',
  //           scope: '#/properties/recurrence'
  //         },
  //         {
  //           type: 'Control',
  //           scope: '#/properties/recurrence_interval',
  //           rule: {
  //             effect: 'HIDE',
  //             condition: {
  //               type: 'LEAF',
  //               scope: '#/properties/recurrence',
  //               expectedValue: 'Never'
  //             }
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       type: 'Control',
  //       scope: '#/properties/description',
  //       options: {
  //         multi: true
  //       }
  //     }
  //   ]
  // };
  // schema = {
  //   type: 'object',
  //   properties: {
  //     name: {
  //       type: 'string',
  //       minLength: 1
  //     },
  //     description: {
  //       title: 'Long Description',
  //       type: 'string'
  //     },
  //     done: {
  //       type: 'boolean'
  //     },
  //     due_date: {
  //       type: 'string',
  //       format: 'date'
  //     },
  //     rating: {
  //       type: 'integer',
  //       maximum: 5
  //     },
  //     recurrence: {
  //       type: 'string',
  //       enum: [
  //         'Never',
  //         'Daily',
  //         'Weekly',
  //         'Monthly'
  //       ]
  //     },
  //     recurrence_interval: {
  //       type: 'integer'
  //     }
  //   },
  //   required: [
  //     'name',
  //     'due_date'
  //   ]
  // };
  // data = {
  //   name: 'Send email to Adrian',
  //   description: 'Confirm if you have passed the subject\nHereby ...',
  //   done: true,
  //   recurrence: 'Daily',
  //   rating: 3,
  // };
}
