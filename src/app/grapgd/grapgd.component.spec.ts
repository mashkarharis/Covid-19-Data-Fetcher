import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapgdComponent } from './grapgd.component';

describe('GrapgdComponent', () => {
  let component: GrapgdComponent;
  let fixture: ComponentFixture<GrapgdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapgdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
