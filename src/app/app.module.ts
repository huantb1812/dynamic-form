import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DfListComponent } from './pages/df-list/df-list.component';
import { SharedModuleModule } from './shared/shared-module.module';
import { DfFormComponent } from './pages/df-form/df-form.component';
import { StoreModule } from '@ngrx/store';
import { dynamicFormReducer } from './store/counter/df.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { JsonFormViewerModule, MaterialsModule } from './shared';

@NgModule({
  declarations: [AppComponent, DfListComponent, DfFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    SharedModuleModule,
    JsonFormViewerModule,
    StoreModule.forRoot({}, {}),
    // StoreModule.forRoot({ dynamicForm: dynamicFormReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
