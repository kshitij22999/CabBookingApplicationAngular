import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class AdminService{
  
    baseUrl: string='http://localhost:9191/project/api';

    constructor(private http:HttpClient){}

        getAdmin(id: number): Observable<any> {
          return this.http.get(`${this.baseUrl}/admin/id/${id}`);
        }

        addAdmin(admin : Object): Observable<Object>{
            return this.http.post(`${this.baseUrl}/admin/newadmin` ,admin );
        }

        editAdmin(id: number, value: any): Observable<Object> {
          return this.http.put(`${this.baseUrl}/admin/update/${id}` ,value );
        }

        deleteAdmin(id: number): Observable<any>{
          return this.http.delete(`${this.baseUrl}/admin/delete/${id}` ,{responseType: 'text'} );

        }

        getAdminsList(): Observable<any>{
          return this.http.get(`${this.baseUrl}/admin/all`);

        }
                
    }

