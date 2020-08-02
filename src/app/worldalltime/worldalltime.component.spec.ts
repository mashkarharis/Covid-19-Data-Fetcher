import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldalltimeComponent } from './worldalltime.component';

describe('WorldalltimeComponent', () => {
  let component: WorldalltimeComponent;
  let fixture: ComponentFixture<WorldalltimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldalltimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldalltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
