import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-dialog-editor-code',
  templateUrl: './dialog-editor-code.component.html',
  styleUrls: ['./dialog-editor-code.component.scss'],
})
export class DialogEditorCodeComponent implements OnInit {
  @ViewChild('editor') editor: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    language: 'json', // java, javascript, python, csharp, html, markdown, ruby
    theme: 'vs-dark', // vs, vs-dark, hc-black
    automaticLayout: true,
    // autoIndent: true,
    formatOnPaste: true,
    formatOnType: true,
    // "autoIndent": true,
    // "formatOnPaste": true,
    // "formatOnType": true
  };
  code: string = '{}';

  formNameControl = new FormControl(this.schema, [Validators.required]);
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public schema: string
  ) {
    this.code = schema;
  }

  ngOnInit() {
    setTimeout(() => {}, 1000);
  }
  onSave() {
    if (this.formNameControl.valid) {
      this.dialogRef.close();
    }
  }
  editorInit(editor: any) {
    // Here you can access editor instance
    //  this.editor = editor;
    setTimeout(() => {
      editor.getAction('editor.action.formatDocument').run();

    }, 200);
  }
}
