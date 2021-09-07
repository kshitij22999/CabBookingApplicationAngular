import { Injectable } from "@angular/core";
import { Cab } from "./cab";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CabService{
  public baseUrl:string = "http://localhost:9191/project/rest/api"
  httpclient: any;
  constructor(private http:HttpClient) { }
 
  addCab(cab:Cab):Observable<Cab>{
    return <Observable<Cab>>this.http.post(this.baseUrl+"/cab/add",cab);
  }
    

  getAllCabs(cab:Cab):Observable<Cab>{
      return <Observable<Cab>>this.http.get(this.baseUrl + "/cab/add");
    }

    updateCab(cab:Cab):Observable<Cab>{
        return <Observable<Cab>>this.httpclient.put(this.baseUrl+"/cab/update",cab);
      }

    deleteCab(cab:Cab):Observable<Cab>{
        console.log("in service class")
        return <Observable<Cab>>this.http.delete(this.baseUrl+"/cab/delete");
     
      }
      

}
