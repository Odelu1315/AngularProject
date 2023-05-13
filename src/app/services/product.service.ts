import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions:any;

  constructor(private http:HttpClient) { }
  getProducts():Observable<any> {
    return this.http.get("http://localhost:4500/products")
  }
  getProductById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }

  postProducts(obj:any):Observable<any>{
     this.httpOptions= new HttpHeaders({
     'Content-Type':'application.json',
     })
     return this.http.post("http://localhost:4500/products",obj,this.httpOptions);
    }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete("http://localhost:4500/products/"+id);

  }
}
