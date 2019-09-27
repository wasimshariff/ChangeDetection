import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './ticker/child1.component';
import {FormsModule} from '@angular/forms';
import { ParentFoodsComponent } from './parent-foods/parent-foods.component';
import { ChildFoodsComponent } from './child-foods/child-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    ParentFoodsComponent,
    ChildFoodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
