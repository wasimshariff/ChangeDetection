import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFoodsComponent } from './parent-foods.component';

describe('ParentFoodsComponent', () => {
  let component: ParentFoodsComponent;
  let fixture: ComponentFixture<ParentFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
