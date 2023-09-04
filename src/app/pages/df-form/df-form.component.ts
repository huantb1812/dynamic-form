import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DynamicForm } from 'src/app/shared';
import { DfComponent } from 'src/app/shared/models/df-component';
import { Property } from 'src/app/shared/models/property';
import { DynamicFormState } from 'src/app/store/counter/df.reducer';

@Component({
  selector: 'app-df-form',
  templateUrl: './df-form.component.html',
  styleUrls: ['./df-form.component.scss'],
})
export class DfFormComponent implements OnInit {
  showFiller = true;
  currentField?: DfComponent;
  selected?: DynamicForm;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRoute.data
      .pipe(map((res) => res['dynamicForm']))
      .subscribe((res) => {
        this.selected = res;
      });
  }

  ngOnInit() {}
  onChangeField(field: DfComponent) {
    this.currentField = field;
  }
  onClose(property: Property) {
    if (property && this.selected) {
      this.generateProperty(property);
      this.generateElement(property);
      this.http
        .put(
          'http://localhost:3000/dynamicForms/' + this.selected.id,
          this.selected
        )
        .subscribe((res) => {});
      console.log(property);
      this.currentField = undefined;
    } else {
      this.currentField = undefined;
    }
  }
  generateProperty(property: Property) {
    if (this.selected) {
      var props = {
        type: property.type,
        description: property.description,
        // default:
        // maximum:
        // minimum
        //
      };
      this.selected.schema.properties[property.name] = props;
    }
  }
  generateElement(property: Property) {
    if (this.selected) {
      var element = {
        type: 'Control',
        scope: `#/properties/${property.name}`,
        // default:
        // maximum:
        // minimum
        //
      };
      this.selected.uischema.elements.push(element);
    }
  }
  onToggleMenu(){

  }
}
