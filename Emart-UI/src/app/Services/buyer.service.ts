import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Purchase } from '../Models/purchase';

const RequestHeader={headers:new HttpHeaders(
  {
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
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
   public SearchItems(itemname:string):Observable<any>{
     return this.client.get<any>(this.url+'searchitem/'+itemname,RequestHeader);
   }
   public BuyItem(item:Purchase):Observable<any>
   {
     return this.client.post<any>(this.url+'buyitem',item,RequestHeader);
   }
}
