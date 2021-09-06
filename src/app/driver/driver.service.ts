import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Driver } from "./driver";


@Injectable({
    providedIn: 'root'
})
export class DriverService {
    baseUrl: string = ' ';

    constructor(private httpclient: HttpClient) { }

    public addDriver(driver: Driver) {
        return this.httpclient.post<Driver>(this.baseUrl, driver);
    }

    public deleteDriver(driver: Driver) {
        return this.httpclient.delete<Driver>(`${this.baseUrl}/driver/${driver.id}`);
    }

    public updateDriver(driver : Driver){
        return this.httpclient.patch<Driver>(`${this.baseUrl}/driver/${driver.id}`, driver);
    }
}
