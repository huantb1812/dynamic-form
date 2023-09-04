import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-df-preview',
  templateUrl: './df-preview.component.html',
  styleUrls: ['./df-preview.component.scss'],
})
export class DfPreviewComponent implements OnInit {
  // _schema: any;
  // schemaCode: string;
  // @Input()
  // public set schema(v: any) {
  //   this._schema = v;
  //   this.schemaCode = JSON.stringify(v);
  // }

  // public get schema(): any {
  //   return this._schema;
  // }

  // _uischema: any;
  // uischemaCode: string;
  // @Input()
  // public set uischema(v: any) {
  //   this._uischema = v;
  //   this.uischemaCode = JSON.stringify(v);
  // }

  // public get uischema(): any {
  //   return this._uischema;
  // }

  // _data: any;
  // dataCode: string;
  // @Input()
  // public set data(v: any) {
  //   this._data = v;
  //   this.dataCode = JSON.stringify(v);
  // }

  // public get data(): any {
  //   return this._data;
  // }

  // codeSchema: string;
  selected?: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(map((res) => res['dynamicForm']))
      .subscribe((res) => {
        this.selected = res;
      });
  }

  ngOnInit() {}
}
