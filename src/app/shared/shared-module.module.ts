import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials.module';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderDfFormComponent } from './header-df-form/header-df-form.component';
import { FieldsComponent } from './fields/fields.component';
import { JsonFormViewerModule } from './json-form-viewer/json-form-viewer.module';
import { FieldDetailsComponent } from './field-details/field-details.component';

@NgModule({
  imports: [CommonModule, MaterialsModule, FormsModule,JsonFormViewerModule],
  declarations: [
    HeaderPageComponent,
    FilterPipe,
    HeaderDfFormComponent,
    FieldsComponent,
    FieldDetailsComponent
  ],
  exports: [
    MaterialsModule,
    HeaderPageComponent,
    FilterPipe,
    FormsModule,
    HeaderDfFormComponent,
    FieldsComponent,
    JsonFormViewerModule,
    FieldDetailsComponent
  ],
})
export class SharedModuleModule {}
