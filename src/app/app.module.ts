import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialsModule } from './shared';
import { DfListComponent } from './pages/df-list/df-list.component';
import { SharedModuleModule } from './shared/shared-module.module';

@NgModule({
  declarations: [AppComponent, DfListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
