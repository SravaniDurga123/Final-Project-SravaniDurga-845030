import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  load:boolean=false;
  SearchForm:FormGroup;
  item:Items[];
  item1:Items;
  itemname:string;
  p:Purchase;
  token:Token;
  load1:boolean=false;
  cart:Cart;
  cart1:Cart[];
  s:number;
  constructor(private route:Router,private builder:FormBuilder,private service:BuyerService) {
   
   }

  ngOnInit() {
    this.SearchForm=this.builder.group({
      itemName:['']
    })
  }
//  onload():void{
//    console.log("load");
//     this.load=true;
//  }
 SearchItem():void{
 this.itemname=this.SearchForm.value["itemName"];
 console.log(this.itemname);
    this.service.SearchItems(this.itemname).subscribe(res=>{
      console.log("item searched");
      this.item=res;
      this.item1=res;
      console.log(this.item);
      if((this.item).length==0)
      {
        this.type();
      }
      else{
        this.load=true;
      }
    })
 }
  buyItem(item:Items):void{
    localStorage.setItem('item',JSON.stringify(item));
     this.route.navigateByUrl('/buyer/buy-product')
  }
  type():void{
    this.load1=true;
  }
  itemexist(item:Items):void{
   
   let itemid=item.itemId;
   
    console.log(itemid);
    let buyerid=Number(localStorage.getItem("buyerid"));
      this.service.ItemExist(itemid,buyerid).subscribe(res=>
        {
         this.s=res;
         console.log(this.s);
         if(this.s!=0 ){
           alert("already added to cart");
         }
          // console.log(JSON.parse(res));
          else {
            this.cart=new Cart();
            this.cart.cartid=Math.floor(Math.random()*1000);
            this.cart.itemname=item.itemName;
            this.cart.description=item.itemDescription;
            this.cart.price=item.price;
            this.cart.image=item.image;
            this.cart.itemId=item.itemId;
            this.cart.buyerId=Number(localStorage.getItem('buyerid'));
            this.service.AddCart(this.cart).subscribe(res=>{
              console.log(this.cart);
               console.log("added");
            },
            err=>{
              console.log(err);
            })
          }
      },
      err=>{
        console.log(err);
      })
  }
  
}
