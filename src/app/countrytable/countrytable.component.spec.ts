import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrytableComponent } from './countrytable.component';

describe('CountrytableComponent', () => {
  let component: CountrytableComponent;
  let fixture: ComponentFixture<CountrytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
