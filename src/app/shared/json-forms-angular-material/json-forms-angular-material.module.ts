
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JsonFormsModule } from '../jsonforms';
import { AutocompleteControlRenderer } from './controls/autocomplete.renderer';
import { BooleanControlRenderer } from './controls/boolean.renderer';
import { DateControlRenderer } from './controls/date.renderer';
import { NumberControlRenderer } from './controls/number.renderer';
import { RangeControlRenderer } from './controls/range.renderer';
import { TextAreaRenderer } from './controls/textarea.renderer';
import { TextControlRenderer } from './controls/text.renderer';
import { ToggleControlRenderer } from './controls/toggle.renderer';
import { LabelRenderer } from './other/label.renderer';
import { JsonFormsDetailComponent } from './other/master-detail/detail';
import { MasterListComponent } from './other/master-detail/master';
import { ObjectControlRenderer } from './other/object.renderer';
import { TableRenderer } from './other/table.renderer';
import { CategorizationTabLayoutRenderer } from './layouts/categorization-layout.renderer';
import { GroupLayoutRenderer } from './layouts/group-layout.renderer';
import { HorizontalLayoutRenderer } from './layouts/horizontal-layout.renderer';
import { VerticalLayoutRenderer } from './layouts/vertical-layout.renderer';
import { ArrayLayoutRenderer } from './layouts/array-layout.renderer';
import { LayoutChildrenRenderPropsPipe } from './layouts';
@NgModule({
  imports: [
    CommonModule,
    JsonFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  declarations: [
    BooleanControlRenderer,
    TextAreaRenderer,
    TextControlRenderer,
    NumberControlRenderer,
    RangeControlRenderer,
    DateControlRenderer,
    ToggleControlRenderer,
    VerticalLayoutRenderer,
    HorizontalLayoutRenderer,
    CategorizationTabLayoutRenderer,
    GroupLayoutRenderer,
    LabelRenderer,
    MasterListComponent,
    JsonFormsDetailComponent,
    ObjectControlRenderer,
    AutocompleteControlRenderer,
    TableRenderer,
    ArrayLayoutRenderer,
    LayoutChildrenRenderPropsPipe,
  ],
  exports:[
    CommonModule,
    JsonFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JsonFormsAngularMaterialModule { }
