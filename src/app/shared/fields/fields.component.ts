import { Component, OnInit } from '@angular/core';
import { FIELDS } from '../models';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fields = FIELDS;
  constructor() {}

  ngOnInit() {}
}
