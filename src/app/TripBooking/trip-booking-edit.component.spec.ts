import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingEditComponent } from './trip-booking-edit.component';

describe('TripBookingEditComponent', () => {
  let component: TripBookingEditComponent;
  let fixture: ComponentFixture<TripBookingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBookingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
