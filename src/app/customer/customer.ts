import { TripBooking } from "../TripBooking/tripbooking";
import { Address } from "./address";


export class Customer{
    id!:number;
    username!:string;
    password!:string;
    mobileNumber!:string;
    email!:string;
    address!:Address;
    role!:string;
    customerName!:string;
    tripBooking!:TripBooking;
    accountStatus!:LoginStatus;

}
enum LoginStatus{
    LOGGEDIN,LOGGEDOUT
}