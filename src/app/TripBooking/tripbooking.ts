import { Cab } from "../cab/cab";
import { Customer } from "../customer/customer";
import { Driver } from "../driver/driver";


export class TripBooking{
    id!:number;
    customer!:Customer;
    cab!:Cab;
    driver!:Driver;
    fromLocation!:string;
    toLocation!:string;
    fromDateTime!:Date;
    toDateTime!:Date;
    distanceInKm!:number;
    status:Status=Status.NOT_ALLOCATED;
    bill:number=0;

    
}

enum Status{
    ALLOCATED,
    NOT_ALLOCATED
}