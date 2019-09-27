import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component {

  numberOfTicks = 0;
  myInput: string;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      //this.ref.markForCheck();
    }, 1000);
  }


}
