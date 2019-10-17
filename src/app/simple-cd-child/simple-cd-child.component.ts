import {AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-simple-cd-child',
  templateUrl: './simple-cd-child.component.html',
  styleUrls: ['./simple-cd-child.component.css']
})
export class SimpleCdChildComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, DoCheck {

  @Input()
  private name: string;

  constructor() { }

  ngOnInit() {
    console.log('SimpleCdChildComponent OnInit');
  }

  ngAfterViewChecked(): void {
    console.log('SimpleCdChildComponent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('SimpleCdChildComponent ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('SimpleCdChildComponent ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SimpleCdChildComponent ngOnChanges');
  }

}
