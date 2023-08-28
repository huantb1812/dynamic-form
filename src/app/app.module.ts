import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DfListComponent } from './pages/df-list/df-list.component';
import { SharedModuleModule } from './shared/shared-module.module';
import { DfFormComponent } from './pages/df-form/df-form.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, DfListComponent, DfFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
