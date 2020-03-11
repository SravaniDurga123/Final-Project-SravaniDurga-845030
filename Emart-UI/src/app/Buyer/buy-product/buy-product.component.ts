import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/Models/purchase';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
 item1:Items;
 purchase:Purchase;
 PurchaseForm:FormGroup;
 itemname:string;
 noofitems:number=1;
 price:number;
 total:number;
 transcationtype:string;
 load:boolean=false;
 load1:boolean=false;
 submitted:boolean=false;
  constructor(private route:Router,private builder:FormBuilder,private service:BuyerService) { 
    console.log(localStorage.getItem('item'));
    this.item1=JSON.parse(localStorage.getItem('item'));
    console.log(this.item1);
  }

  ngOnInit() {
    this.PurchaseForm=this.builder.group({
          transcationtype:[''],
          noofitems:[''],
          price:[''],
          cardnumber:['',Validators.required],
          cv:['',Validators.required],
          holder:['',Validators.required]
       
    });
  }
  onSubmit():void{
    this.submitted=true;
    this.transcationtype=this.PurchaseForm.value['transcationtype'];
    if(this.transcationtype=="cash"){
      this.load=true;
      this.BuyNow();
    }
    else {
    if(this.PurchaseForm.valid)
    {
      
      this.BuyNow();
    }
  } 
  }
  
  get f() { return this.PurchaseForm.controls; }
 BuyNow(){
   console.log("success");
    this.itemname=this.item1.itemName;
    this.noofitems=this.PurchaseForm.value['noofitems'];
    this.transcationtype=this.PurchaseForm.value['transcationtype'];
    this.price=this.item1.price;
    this.total=(this.price)*(this.noofitems);
 }
 type(){
  this.transcationtype=this.PurchaseForm.value['transcationtype'];
  if(this.transcationtype=="card"){
    this.load1=true;
  }
  else {
    this.load1=false;
  }
 }
 confirm(){
   alert("successfull")
   this.route.navigateByUrl('/buyer/search');
   this.purchase=new Purchase();
   this.purchase.purchaseId=Math.floor(Math.random()*1000);
    this.purchase.BuyerId=Number(localStorage.getItem('buyerid'));
    console.log(this.purchase.BuyerId);
    this.purchase.SellerId=this.item1.sellerId;
    this.purchase.itemId=this.item1.itemId;
    this.purchase.noOfItems=this.noofitems;
   this.purchase.transcationTime=new Date();
   this.purchase.transcationStatus="success";
   this.purchase.remarks="good";
   this.purchase.transcationType=this.transcationtype;
   this.service.BuyItem(this.purchase).subscribe(res=>{
     console.log("recorded");
   })
 }
}
