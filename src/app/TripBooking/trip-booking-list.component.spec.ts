import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingListComponent } from './trip-booking-list.component';

describe('TripBookingListComponent', () => {
  let component: TripBookingListComponent;
  let fixture: ComponentFixture<TripBookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
