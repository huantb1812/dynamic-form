import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-editor-code',
  templateUrl: './editor-code.component.html',
  styleUrls: ['./editor-code.component.scss'],
})
export class EditorCodeComponent implements OnInit {
  @Input() code: string = '{}';
  @ViewChild('editor') editor: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    language: 'json', // java, javascript, python, csharp, html, markdown, ruby
    theme: 'vs', // vs, vs-dark, hc-black
  };
  constructor() {}

  ngOnInit() {}
  onSave() {
    if (this.code.length > 0) {
      this.editor.value;
      let obj = JSON.parse(this.code);
      while (typeof obj === 'string') {
        obj = JSON.parse(obj);
      }
      console.log(obj);
    }
  }
  editorInit(editor: any) {
    // Here you can access editor instance
    //  this.editor = editor;
    setTimeout(() => {
      this.editor = editor;
      editor.getAction('editor.action.formatDocument').run();
    }, 100);
  }
}
