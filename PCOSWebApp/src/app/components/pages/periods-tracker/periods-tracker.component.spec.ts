import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsTrackerComponent } from './periods-tracker.component';

describe('PeriodsTrackerComponent', () => {
  let component: PeriodsTrackerComponent;
  let fixture: ComponentFixture<PeriodsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodsTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
