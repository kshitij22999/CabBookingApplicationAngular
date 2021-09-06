import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingAddComponent } from './trip-booking-add.component';

describe('TripBookingAddComponent', () => {
  let component: TripBookingAddComponent;
  let fixture: ComponentFixture<TripBookingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBookingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
