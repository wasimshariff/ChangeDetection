import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentFoodsComponent} from './parent-foods/parent-foods.component';
import {AppComponent} from './app.component';
import {Child1Component} from './ticker/child1.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'foods', component: ParentFoodsComponent },
  { path: 'ticker', component: Child1Component},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
