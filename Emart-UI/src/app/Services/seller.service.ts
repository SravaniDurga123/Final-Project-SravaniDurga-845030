import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Items } from '../Models/items';
import { Seller } from '../Models/seller';
const RequestHeader={headers:new HttpHeaders(
  {
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
)}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
url:string='http://localhost:64562/api/Item/';
url1:string="http://localhost:64562/api/Seller/";
  constructor(private client:HttpClient) { }
  public AddItem(item:Items):Observable<any>
  {
    return this.client.post<any>(this.url+'additem',item,RequestHeader);
  }
  public GetCategory():Observable<any>
  {
    console.log("dhfg");
    return this.client.get<any>(this.url+'getcategory',RequestHeader);
    
  }
  public GetSubCategory(categoryid:number):Observable<any>
  {
    console.log("sajdg");
    return this.client.get<any>(this.url+'getsubcategory/'+categoryid,RequestHeader);
  }
  public ViewItems(sellerid):Observable<any>
  {
    return this.client.get<any>(this.url+'viewItems/'+sellerid,RequestHeader);
  }
  public GetSubCategories():Observable<any>
 {
   console.log("sajdg");
   return this.client.get<any>(this.url+'getsubcategories',RequestHeader);
 }
 public DeleteItem(itemid:number):Observable<any>
 {
   return this.client.delete<any>(this.url+'deleteitem/'+itemid,RequestHeader);
 }
 public GetSeller(sellerid:number):Observable<any>
 {
   return this.client.get<any>(this.url1+'getseller/'+sellerid,RequestHeader);
 }
 public GetItem(itemid:number):Observable<any>
 {
   return this.client.get<any>(this.url+'getitem/'+itemid,RequestHeader);
 }
 public UpdateItem(item:Items):Observable<any>{
   console.log(item);
   return this.client.put<any>(this.url+'updateitem',item,RequestHeader);
 }
 public EditProfile(seller:Seller):Observable<any>{
   console.log(seller);
   return this.client.put<any>(this.url1+'editprofile',seller,RequestHeader);
 }
}
