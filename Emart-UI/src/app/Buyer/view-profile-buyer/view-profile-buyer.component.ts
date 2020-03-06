import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-view-profile-buyer',
  templateUrl: './view-profile-buyer.component.html',
  styleUrls: ['./view-profile-buyer.component.css']
})
export class ViewProfileBuyerComponent implements OnInit {
 BuyerForm:FormGroup;
 buyer:Buyer;
 buyer1:Buyer;
 buyerid:number;
 createdatetime:Date;
 password:string
  constructor(private builder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
  this.BuyerForm=this.builder.group({
     buyername:[''],
     emailid:[''],
     mobile:[''],


  })
  this.getBuyer();
  this.BuyerForm.disable();
  }
  getBuyer():void {
    this.buyerid=Number(localStorage.getItem('buyerid'));
   this.service.GetProfile(this.buyerid).subscribe(res=>{
     this.buyer=res;
     console.log(this.buyer);
     this.password=this.buyer.pwd;
     this.buyerid=this.buyer.buyerId;
     this.createdatetime=this.buyer.createDateTime;
     this.BuyerForm.setValue({
        buyername:this.buyer.username,
        emailid:this.buyer.emailid,
        mobile:this.buyer.mobile,

     })
   })

  }
  enable():void{
    this.BuyerForm.enable();
  }
  Save():void{
   this.buyer1 =new Buyer();
   this.buyer1.buyerId=Number(localStorage.getItem('buyerid'));
   this.buyer1.createDateTime=this.createdatetime;
   this.buyer1.pwd=this.password;
   this.buyer1.username=this.BuyerForm.value['buyername'];
   this.buyer1.emailid=this.BuyerForm.value['emailid'];
   this.buyer1.mobile=this.BuyerForm.value['mobile'];
   this.service.EditProfile(this.buyer1).subscribe(res=>{
     console.log("updated");

   },
   err=>{
     console.log(err);
   })
   this.BuyerForm.disable();
  }
}
