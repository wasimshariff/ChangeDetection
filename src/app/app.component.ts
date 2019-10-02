import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChangeDetection';

  ngOnInit(): void {
    setTimeout(() => this.title = 'wasim', 7000);
  }
}
