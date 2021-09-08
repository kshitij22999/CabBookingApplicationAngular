import { Address } from "../customer/address";


export class Admin {
    id: number=0;
    username: string="";
    password: string="";
    emailId: string="";
    mobileNo: string="";
    address!:Address;
    
}
enum LoginStatus{
    LOGGEDIN,LOGGEDOUT
}