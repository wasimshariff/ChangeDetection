import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFoodsComponent } from './child-foods.component';

describe('ChildFoodsComponent', () => {
  let component: ChildFoodsComponent;
  let fixture: ComponentFixture<ChildFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
