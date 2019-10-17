import {ChangeDetectorRef, Component, NgZone, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChangeDetection';

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
    setTimeout(() => this.title = 'wasim', 7000);
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent ngOnChanges');
  }

}
