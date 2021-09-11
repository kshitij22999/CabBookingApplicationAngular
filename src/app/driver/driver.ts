import { Cab } from "../cab/cab";
import { TripBooking } from "../TripBooking/tripbooking";

export class Driver{
    filter(arg0: (u: any) => boolean): Driver {
      throw new Error('Method not implemented.');
    }
    message!: string;
    status!: number;

    id! : number;
    username!:string;
    password!:string;
    cab! : Cab;
    driverName! : string;
    rating! : string;
    role!:string;
    lisenceNo! : number;
    tripBookings! : TripBooking;
    vaccinationStatus! : VaccinationStatus;
    availabilityStaus! : AvailabilityStatus;
    mobileNo! : number ;
    address! : string;
    email! : string;
    accountStatus!:LoginStatus;

}
    enum LoginStatus{
    LOGGEDIN,LOGGEDOUT
}


enum VaccinationStatus{
    FirstDose_Done,SecondDose_Done,Not_Vaccinated
}

enum AvailabilityStatus{
    Available,Busy
}
