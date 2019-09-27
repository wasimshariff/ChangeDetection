import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-parent-foods',
  templateUrl: './parent-foods.component.html',
  styleUrls: ['./parent-foods.component.css']
})
export class ParentFoodsComponent implements OnInit {

  foods = ['Bacon', 'Lettuce', 'Tomatoes'];

  foodObs: Observable<string> = new Observable(observer => {
      observer.next('1');
      observer.next('2');
      observer.next('3');
     // observer.complete();
      setInterval(() => observer.next(Math.random().toString(2)), 1000);
    }
    );


  ngOnInit() {
   // this.foodObs.subscribe(data => console.log(data));
  }

  addFood(food) {
    // ( doesnt work for onPush )
     // this.foods.push(food);
    // ( works with onPush, as new object passed as input)
     this.foods = [...this.foods, food];

  }

  constructor() { }

}
