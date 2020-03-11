import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Purchase } from '../Models/purchase';
import { Cart } from '../Models/cart';

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
url1:string='http://localhost:64562/api/Transcation/';
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
   public AddCart(item:Cart):Observable<any>{
     console.log("item");
     return this.client.post<any>(this.url+'addcart',item,RequestHeader);
   }
   public ViewCart(buyerid:number):Observable<any>
   {
     return this.client.get<any>(this.url+'viewcart/'+buyerid,RequestHeader);
   }
   public ItemExist(itemid:number,buyerid:number):Observable<number>{
     
     return this.client.get<number>(this.url+'itemexist/'+itemid+'/'+buyerid,RequestHeader);
   }
   public DeleteItem(cartid:number):Observable<any>{
     console.log("sadh");
     return this.client.delete<any>(this.url+'deleteitem/'+cartid,RequestHeader);
   }
   public GetItem(itemid:number):Observable<any>{
     return this.client.get<any>(this.url+'getitem/'+itemid,RequestHeader);
   }
   public TranscationHistory(buyerid:number):Observable<any>
   {
     return this.client.get<any>(this.url1+'transcationhistory/'+buyerid,RequestHeader);
   }
}
