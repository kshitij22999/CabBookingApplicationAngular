import { TripBooking } from "../TripBooking/tripbooking";
import { Address } from "./address";


export class Customer{
    message!: string;
    status!: number;
    filter(arg0: (u: any) => boolean): Customer {
      throw new Error('Method not implemented.');
    }
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