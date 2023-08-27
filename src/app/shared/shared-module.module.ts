import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials.module';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderDfFormComponent } from './header-df-form/header-df-form.component';

@NgModule({
  imports: [CommonModule, MaterialsModule,  FormsModule],
  declarations: [HeaderPageComponent, FilterPipe, HeaderDfFormComponent],
  exports: [MaterialsModule, HeaderPageComponent, FilterPipe,FormsModule, HeaderDfFormComponent],
})
export class SharedModuleModule {}
