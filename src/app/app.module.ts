import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DfListComponent } from './pages/df-list/df-list.component';
import { SharedModuleModule } from './shared/shared-module.module';
import { DfFormComponent } from './pages/df-form/df-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { JsonFormViewerModule, MaterialsModule } from './shared';
import { DfPreviewComponent } from './pages/df-preview/df-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DfListComponent,
    DfFormComponent,
    DfPreviewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    SharedModuleModule,
    JsonFormViewerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
