import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormViewerComponent } from './json-form-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { JsonFormsModule } from '@jsonforms/angular';
// import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // JsonFormsModule,
    // JsonFormsAngularMaterialModule,
  ],
  declarations: [JsonFormViewerComponent],
  exports:[JsonFormViewerComponent]
})
export class JsonFormViewerModule { }
