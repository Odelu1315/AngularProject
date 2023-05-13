import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietserviceService {

  constructor(private http:HttpClient) { }
  getDietById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/diet/"+id)
  }
  getDiet():Observable<any>{
    return this.http.get("http://localhost:4500/diet/")
  }
}
