import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './ticker/child1.component';
import {FormsModule} from '@angular/forms';
import { ParentFoodsComponent } from './parent-foods/parent-foods.component';
import { ChildFoodsComponent } from './child-foods/child-foods.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SimpleCdParentComponent } from './simple-cd-parent/simple-cd-parent.component';
import { SimpleCdChildComponent } from './simple-cd-child/simple-cd-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    ParentFoodsComponent,
    ChildFoodsComponent,
    HomeComponent,
    SimpleCdParentComponent,
    SimpleCdChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
