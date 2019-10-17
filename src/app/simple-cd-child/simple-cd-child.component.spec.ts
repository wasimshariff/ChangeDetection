import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCdChildComponent } from './simple-cd-child.component';

describe('SimpleCdChildComponent', () => {
  let component: SimpleCdChildComponent;
  let fixture: ComponentFixture<SimpleCdChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCdChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCdChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
