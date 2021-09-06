import { Cab } from "../cab/cab";
import { TripBooking } from "../TripBooking/tripbooking";

export class Driver{
    id! : number;
    cab! : Cab;
    driverName! : string;
    rating! : string;
    lisenceNo! : number;
    tripBookings! : TripBooking;
    vaccinationStatus! : VaccinationStatus;
    availabilityStaus! : AvailabilityStatus


}

enum VaccinationStatus{
    FirstDose_Done,SecondDose_Done,Not_Vaccinated
}

enum AvailabilityStatus{
    Available,Busy
}