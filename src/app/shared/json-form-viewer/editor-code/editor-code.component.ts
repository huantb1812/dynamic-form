import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
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
  @Output() saveData: EventEmitter<any> = new EventEmitter();
  editorOptions: MonacoEditorConstructionOptions = {
    language: 'json', // java, javascript, python, csharp, html, markdown, ruby
    theme: 'vs', // vs, vs-dark, hc-black
  };
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.formatDocument(this.editor);
  }
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
      this.saveData.emit(obj);
    }
  }
  editorInit(editor: any) {
    // Here you can access editor instance
    //  this.editor = editor;
    this.editor = editor;
    this.formatDocument(this.editor);
  }
  formatDocument(editor: any) {
    setTimeout(() => {
      editor?.getAction('editor.action.formatDocument').run();
    }, 100);
  }
}
