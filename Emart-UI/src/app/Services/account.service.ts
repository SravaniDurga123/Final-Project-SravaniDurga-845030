import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';

const RequestHeader={headers:new HttpHeaders(
  {
    'Content-Type':'application/json',
   
  }
)}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
url:string='http://localhost:64562/api/Account/';
  constructor(private client:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>
  {
    return this.client.post(this.url+'buyerregister',buyer,RequestHeader);
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
    return this.client.post(this.url+'sellerregister',seller,RequestHeader);
  }
  public SellerLogin(uname:string,pwd:string):Observable<any>{
    return this.client.get(this.url+'sellerlogin/'+uname+"/"+pwd,RequestHeader);
  }
  public BuyerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.client.get(this.url+'buyerlogin/'+uname+"/"+pwd,RequestHeader);
  }
  public GetBuyer():Observable<any>{
    return this.client.get<any>(this.url+'getbuyer',RequestHeader);
  }
  public GetSeller():Observable<any>
  {
    return this.client.get<any>(this.url+'getseller',RequestHeader);
  }
}
