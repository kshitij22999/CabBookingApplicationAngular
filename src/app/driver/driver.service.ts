import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Driver } from "./driver";


@Injectable({
    providedIn: 'root'
})
export class DriverService {
    baseUrl: string = ' http://localhost:9595/project/rest/api';

    constructor(private httpclient: HttpClient) { }

    public addDriver(driver: Driver) {
        return this.httpclient.post<Driver>(this.baseUrl + "/drivers", driver);
    }

    public deleteDriver(driver: Driver) {
        return this.httpclient.delete<Driver>(`${this.baseUrl}/drivers/${driver.id}`);
    }

    public updateDriver(driver : Driver) : Observable <Driver>{
        return this.httpclient.patch<Driver>(`${this.baseUrl}/drivers/${driver.id}`, driver);
    }

    public getDrivers() : Observable<Driver[]> {
        return <Observable<Driver[]>>this.httpclient.get(`${this.baseUrl}/drivers`);
    }

    public getDriver(id: number): Observable<Driver> {
        return <Observable<Driver>>this.httpclient.get(`${this.baseUrl}/drivers/${id}` )
    }
}
