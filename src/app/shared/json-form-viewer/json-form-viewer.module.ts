import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormViewerComponent } from './json-form-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFormsComponent } from './json-forms/json-forms.component';
import { JsonFormsModule } from '../jsonforms';
import { JsonFormsAngularMaterialModule } from '../json-forms-angular-material';
import { EditorCodeComponent } from './editor-code/editor-code.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials.module';
import { DesignLayoutComponent } from './design-layout/design-layout.component';
import { VerticalLayoutComponent } from './vertical-layout/vertical-layout.component';
import { HorizoltalLayoutComponent } from './horizoltal-layout/horizoltal-layout.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MonacoEditorModule,
  ],
  declarations: [
    JsonFormViewerComponent,
    JsonFormsComponent,
    EditorCodeComponent,
    DesignLayoutComponent,
    VerticalLayoutComponent,
    HorizoltalLayoutComponent
  ],
  exports: [JsonFormViewerComponent, JsonFormsComponent, EditorCodeComponent],
})
export class JsonFormViewerModule {}
