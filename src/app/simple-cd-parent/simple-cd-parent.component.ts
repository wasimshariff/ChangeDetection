import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-simple-cd-parent',
  templateUrl: './simple-cd-parent.component.html',
  styleUrls: ['./simple-cd-parent.component.css']
})
export class SimpleCdParentComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit {
  name: string;

  constructor() { }

  ngOnInit() {
    console.log('SimpleCdParentComponent OnInit');
  }

  ngAfterViewChecked(): void {
    console.log('SimpleCdParentComponent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('SimpleCdParentComponent ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('SimpleCdParentComponent ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SimpleCdParentComponent ngOnChanges');
  }


}
