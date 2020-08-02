import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldyesterdayComponent } from './worldyesterday.component';

describe('WorldyesterdayComponent', () => {
  let component: WorldyesterdayComponent;
  let fixture: ComponentFixture<WorldyesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldyesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldyesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
