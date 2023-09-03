import { Component, Input, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
// import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-json-form-viewer',
  templateUrl: './json-form-viewer.component.html',
  styleUrls: ['./json-form-viewer.component.scss'],
})
export class JsonFormViewerComponent {
  _schema: any;
  schemaCode: string;
  @Input()
  public set schema(v: any) {
    this._schema = v;
    this.schemaCode = JSON.stringify(v);
  }

  public get schema(): any {
    return this._schema;
  }

  _uischema: any;
  uischemaCode: string;
  @Input()
  public set uischema(v: any) {
    this._uischema = v;
    this.uischemaCode = JSON.stringify(v);
  }

  public get uischema(): any {
    return this._uischema;
  }

  _data: any;
  dataCode: string;
  @Input()
  public set data(v: any) {
    this._data = v;
    this.dataCode = JSON.stringify(v);
  }

  public get data(): any {
    return this._data;
  }

  codeSchema: string;
  selected: any;
  constructor(
    public dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.activatedRoute.data
      .pipe(map((res) => res['dynamicForm']))
      .subscribe((res) => {
        this.selected = res;
      });
  }
  onSaveSchema(schema: any) {
    this.selected = {
      ...this.selected,
      schema,
    };
    this.updateDB();
  }
  onSaveUISchema(uischema: any) {
    this.selected = {
      ...this.selected,
      uischema,
    };
    this.updateDB();
  }
  onSaveData(data: any) {
    this.selected = {
      ...this.selected,
      data,
    };
    this.updateDB();
  }
  updateDB() {
    this.httpClient
      .put(
        'http://localhost:3000/dynamicForms/' + this.selected.id,
        this.selected
      )
      .subscribe((_) => {});
  }
}
