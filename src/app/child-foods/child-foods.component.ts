import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-child-foods',
  templateUrl: './child-foods.component.html',
  styleUrls: ['./child-foods.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildFoodsComponent implements OnInit {
  @Input() data: string[];

  @Input() foodObs: Observable<string>;

  foodList: string[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.foodObs.subscribe(data => {
      this.foodList.push(data);
      //this.cd.detectChanges();
       this.cd.markForCheck();
    });
  }

}
