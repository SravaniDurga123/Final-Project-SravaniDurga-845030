import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
 
 cart:Cart;
 item:Items;
  constructor(private route:Router,private builder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    
    this.viewcart();
  }
  viewcart(){
    let buyerid=Number(localStorage.getItem('buyerid'));
    this.service.ViewCart(buyerid).subscribe(res=>{
        this.cart=res;
        console.log(this.cart);
    },
    err=>{
      console.log(err);
    })
  }
  deleteitem(cartid:number){
    console.log(cartid);
    this.service.DeleteItem(cartid).subscribe(res=>{
      console.log("deleted");
       this.viewcart();
    },
    err=>{
      console.log(err);
    })
  }
  buy(itemid:number){
    this.service.GetItem(itemid).subscribe(res=>{
      this.item=res;
      localStorage.setItem('item',JSON.stringify(this.item));
      this.route.navigateByUrl('/buyer/buy-product');
    })
  }
}
