import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './fields-layouts/fields.component';
import { FieldDetailsComponent } from './field-details/field-details.component';

import { DialogInitANewDfComponent } from './dialog-init-a-new-df/dialog-init-a-new-df.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { MaterialsModule } from './materials.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule,
    MaterialsModule
  ],
  declarations: [
    HeaderPageComponent,
    FilterPipe,
    FieldsComponent,
    FieldDetailsComponent,
    DialogInitANewDfComponent,
  ],
  exports: [
    HeaderPageComponent,
    FilterPipe,
    FormsModule,
    FieldsComponent,
    FieldDetailsComponent,
    DialogInitANewDfComponent,
    MonacoEditorModule,
  ],
})
export class SharedModuleModule {}
