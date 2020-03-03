import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';

const RequestHeader={headers:new HttpHeaders(
  {
    'Content-Type':'application/json'
  }
)}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
url:string ='http://localhost:64562/api/Buyer/';
  constructor(private client:HttpClient) {
   }

   public GetProfile(id:number):Observable<any>{
     return this.client.get<any>(this.url+'getbuyer/'+id,RequestHeader);
   }
   public EditProfile(buyer:Buyer):Observable<any>{
     console.log(buyer);
     return this.client.put<any>(this.url+'editprofile',buyer,RequestHeader);
   }
}
