import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Driver } from "./driver";


@Injectable({
    providedIn: 'root'
})
export class DriverService {
    [x: string]: any;
    baseUrl: string = ' http://localhost:9191/project/rest/api';

    constructor(private httpclient: HttpClient) { }

    public addDriver(driver: Driver) {
        return this.httpclient.post<Driver>(`${this.baseUrl}/drivers`, driver);
    }

    public deleteDriver(id : number) {
        return this.httpclient.delete<Driver>(`${this.baseUrl}/drivers/${id}`);
    }

    public updateDriver(driver : Driver){
        return this.httpclient.patch<Driver>(`${this.baseUrl}/drivers/update/${driver.id}`, driver);
    }

    public getAllDrivers() {
        return this.httpclient.get<Driver[]>(`${this.baseUrl}/drivers`);
    }

    public getDriverById(id: number): Observable<Driver> {
        return this.httpclient.get<Driver>(`${this.baseUrl}/drivers/${id}`);
    }

    public getDriverByUsername(username : string) : Observable<Driver> {
        return this.httpclient.get<Driver>(`${this.baseUrl}/drivers/username/${username}`);
    }
}
