import { Component, Input, OnInit } from '@angular/core';
import { DialogEditorCodeComponent } from '../dialog-editor-code/dialog-editor-code.component';
import { Dialog } from '@angular/cdk/dialog';
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
  constructor(public dialog: Dialog) {}
  onEditSchema() {
    const editorDialog = this.dialog.open<string>(DialogEditorCodeComponent, {
      data: JSON.stringify( this.schema),
    });

    editorDialog.closed.subscribe((result?: string) => {
      if (result != null) {
        // const data = {
        //   id: uuidv4(),
        //   name: result,
        //   title: result,
        //   lastUpdateTime: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
        //   status: 'closed',
        //   schema: {
        //     type: 'object',
        //     properties: {},
        //     required: [],
        //   },
        //   uischema: {
        //     type: 'VerticalLayout',
        //     elements: [],
        //   },
        //   data: {},
        // };
        // this.http
        //   .post('http://localhost:3000/dynamicForms', data)
        //   .subscribe((_) => {
        //     this.getDynamicForms();
        //   });
      }
    });
  }
}
