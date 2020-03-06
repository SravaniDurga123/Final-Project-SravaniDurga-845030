import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';

const RequestHeader={headers:new HttpHeaders(
  {
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
)}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:64562/api/Admin/'
  constructor(private client:HttpClient) { }

 public AddCategory(category:Category):Observable<any>
 {
   return this.client.post<any>(this.url+'addcategory',category,RequestHeader);
 }
 public AddSubCategory(subcategory:SubCategory):Observable<any>
 {
   return this.client.post<any>(this.url+'addsubcategory',subcategory,RequestHeader);
 }
 public GetCategory():Observable<any>
 {
   console.log("dhfg");
   return this.client.get<any>(this.url+'getcategory',RequestHeader);
   
 }
 public GetSubCategory():Observable<any>
 {
   console.log("sajdg");
   return this.client.get<any>(this.url+'getsubcategory',RequestHeader);
 }
 public GetSellers():Observable<any>
 {
   console.log("Seller");
   return this.client.get<any>(this.url+'getsellers',RequestHeader);
 }
 public GetBuyers():Observable<any>
 {
   console.log("BUYER");
   return this.client.get<any>(this.url+'getbuyers',RequestHeader);
 }
 public DeleteCategory(id:number):Observable<any>
 {
    return this.client.delete(this.url+'deletecategory/'+id,RequestHeader);
 }
 public DeleteSubCategory(id:number):Observable<any>{
   return this.client.delete(this.url+'deletesubcategory/'+id,RequestHeader);
 }
 public getCategoryId(id:number):Observable<any>{
   return this.client.get(this.url+'getcategoryid/'+id,RequestHeader);
 }
 public GetSubCategoryId(id:number):Observable<any>{
   return this.client.get(this.url+'getsubcategoryid/'+id,RequestHeader);
 }
 public UpdateCategory(category:Category):Observable<any>{
   return this.client.put(this.url+'updatecategory',category,RequestHeader);
 }
 public UpdateSubCategory(subcategory:SubCategory):Observable<any>
 {
   return this.client.put(this.url+'updatesubcategory',subcategory,RequestHeader);
 }
}
