import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Injectable({
  providedIn: 'root'
})
export class AcceptResolverService implements Resolve<TripBooking>{

  constructor(private tripbookingservice:TripBookingService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TripBooking | Observable<TripBooking> | Promise<TripBooking> {
    const id = route.paramMap.get('id')||0;
    console.log('this is resolver'+id);
    return this.tripbookingservice.getTripById(+id);
  }
}
