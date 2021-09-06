import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingDetailsComponent } from './trip-booking-details.component';

describe('TripBookingDetailsComponent', () => {
  let component: TripBookingDetailsComponent;
  let fixture: ComponentFixture<TripBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
