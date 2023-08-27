import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials.module';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialsModule,  FormsModule],
  declarations: [HeaderPageComponent, FilterPipe],
  exports: [MaterialsModule, HeaderPageComponent, FilterPipe,FormsModule],
})
export class SharedModuleModule {}
