import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioComponent } from './barrio.component';

describe('BarrioComponent', () => {
  let component: BarrioComponent;
  let fixture: ComponentFixture<BarrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
