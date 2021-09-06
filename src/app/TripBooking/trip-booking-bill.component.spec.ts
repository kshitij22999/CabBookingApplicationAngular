import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingBillComponent } from './trip-booking-bill.component';

describe('TripBookingBillComponent', () => {
  let component: TripBookingBillComponent;
  let fixture: ComponentFixture<TripBookingBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBookingBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
