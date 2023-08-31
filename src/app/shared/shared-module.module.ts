import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials.module';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderDfFormComponent } from './header-df-form/header-df-form.component';
import { FieldsComponent } from './fields-layouts/fields.component';
import { JsonFormViewerModule } from './json-form-viewer/json-form-viewer.module';
import { FieldDetailsComponent } from './field-details/field-details.component';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogInitANewDfComponent } from './dialog-init-a-new-df/dialog-init-a-new-df.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule,
    FormsModule,
    DialogModule,
    MonacoEditorModule,
    JsonFormViewerModule
  ],
  declarations: [
    HeaderPageComponent,
    FilterPipe,
    HeaderDfFormComponent,
    FieldsComponent,
    FieldDetailsComponent,
    DialogInitANewDfComponent,
  ],
  exports: [
    MaterialsModule,
    HeaderPageComponent,
    FilterPipe,
    FormsModule,
    HeaderDfFormComponent,
    FieldsComponent,
    FieldDetailsComponent,
    DialogModule,
    DialogInitANewDfComponent,
    DialogModule,
    MonacoEditorModule,
    JsonFormViewerModule
  ],
})
export class SharedModuleModule {}
