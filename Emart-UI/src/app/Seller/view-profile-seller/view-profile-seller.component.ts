import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/Models/seller';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-profile-seller',
  templateUrl: './view-profile-seller.component.html',
  styleUrls: ['./view-profile-seller.component.css']
})
export class ViewProfileSellerComponent implements OnInit {
 seller:Seller;
 SellerForm:FormGroup;
 disabled:boolean=false;
 seller1:Seller;
 password:string;
  constructor(private builder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
     this.SellerForm=this.builder.group({
        sellername:[''],
        emailid:[''],
        mobile:[''],
        companyname:[''],
        gstin:[''],
        companydescription:[''],
        website:[''],
        postaladdress:['']
     });
    this.GetSeller();
    this.SellerForm.disable();
  }
  GetSeller():void {
    let sellerid=1;
    this.service.GetSeller(sellerid).subscribe(res=>{
      this.seller=res;
      this.password=this.seller.pwd;
      console.log(this.seller);
      this.SellerForm.setValue({
        sellername:this.seller.sellername,
        emailid:this.seller.emailId,
        mobile:this.seller.mobile,
        companyname:this.seller.companyname,
        gstin:this.seller.gstin,
        companydescription:this.seller.aboutcompany,
        postaladdress:this.seller.postalAddress,
        website:this.seller.website
      })
    },
    err=>{
      console.log(err);
    })
  }
  enable(){
    this.SellerForm.enable();
  }
  Save():void {
  this.seller1=new Seller();
  this.seller1.sellerid=1;
  this.seller1.pwd=this.password;
  this.seller1.sellername=this.SellerForm.value['sellername'];
  this.seller1.emailId=this.SellerForm.value['emailid'];
  this.seller1.mobile=this.SellerForm.value['mobile'];
  this.seller1.companyname=this.SellerForm.value['companyname'];
  this.seller1.gstin=this.SellerForm.value['gstin'];
  this.seller1.aboutcompany=this.SellerForm.value['companydescription'];
  this.seller1.postalAddress=this.SellerForm.value['postaladdress'];
  this.seller1.website=this.SellerForm.value['website'];
  this.service.EditProfile(this.seller1).subscribe(res=>{
    console.log("updated succesfully");
  },
  err=>{
    console.log(err);
  })
  this.SellerForm.disable();
  }
}
