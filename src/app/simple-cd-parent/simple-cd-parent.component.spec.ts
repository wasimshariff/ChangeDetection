import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCdParentComponent } from './simple-cd-parent.component';

describe('SimpleCdParentComponent', () => {
  let component: SimpleCdParentComponent;
  let fixture: ComponentFixture<SimpleCdParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCdParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCdParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
