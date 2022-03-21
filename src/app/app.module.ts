import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestSortingComponent } from './test-sorting/test-sorting.component';
import { MainComponentComponent } from './main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TestSortingComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    TestSortingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
