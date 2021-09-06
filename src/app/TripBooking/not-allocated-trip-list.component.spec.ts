import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllocatedTripListComponent } from './not-allocated-trip-list.component';

describe('NotAllocatedTripListComponent', () => {
  let component: NotAllocatedTripListComponent;
  let fixture: ComponentFixture<NotAllocatedTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAllocatedTripListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAllocatedTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
