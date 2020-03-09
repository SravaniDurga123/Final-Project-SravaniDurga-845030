import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css'],
  providers:[AccountService]
})
export class RegisterSellerComponent implements OnInit {
 AccountForm:FormGroup;
 submitted:boolean=false;
 seller:Seller;
 seller1:Seller[];
 i:number;
 load:boolean=false;
  constructor(private builder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.AccountForm=this.builder.group({
      sellerid:[''],
      sellername:['',[Validators.required,Validators.pattern('^[a-z]{3,6}$')]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      emailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(6)]],
      postaladdress:[''],
      gstin :['',Validators.required],
      website:['',[Validators.required,Validators.maxLength(25)]],
      companyname:['',[Validators.required,Validators.maxLength(30)]],
      aboutcompany:[''],
      // acceptTerms:[false,Validators.requiredTrue]
    
    });
  }
   onSubmit(){
    this.submitted=true;
    if(this.AccountForm.valid)
    {
      console.log("heell");
      this.Register();
      console.log(JSON.stringify(this.AccountForm.value));
    }
   }
   Reset()
   {
     this.submitted=false;
     this.AccountForm.reset();
   }
   get f() { return this.AccountForm.controls; };
 Register():void{
   console.log("entered");
   this.seller=new Seller();
   this.seller.sellerid=Math.floor(Math.random()*1000);
   this.seller.sellername=this.AccountForm.value["sellername"];
   this.seller.pwd=this.AccountForm.value["pwd"];
   this.seller.emailId=this.AccountForm.value["emailid"];
   this.seller.mobile=this.AccountForm.value["mobile"];
   this.seller.gstin=this.AccountForm.value["gstin"];
   this.seller.website=this.AccountForm.value["website"];
   this.seller.companyname=this.AccountForm.value["companyname"];
   this.seller.aboutcompany=this.AccountForm.value["aboutcompany"];
   this.seller.postalAddress=this.AccountForm.value["postaladdress"];
   this.service.SellerRegister(this.seller).subscribe(res=>
    {
      console.log("record added");
    },
    err=>
    {
      console.log(err);
    }
  )
 }
 ExistUsername():void {
   let username=this.AccountForm.value["sellername"];
   this.service.GetSeller().subscribe(res=>{
     this.seller1=res;
     console.log(this.seller1);
     let f=0;
     for(this.i=0;this.i<this.seller1.length;this.i++){
       if(this.seller1[this.i].sellername==username){
          f=1;
          break;
       }
     }
     if(f==1){
       this.type()
     }
     else {
       this.load=false;
     }
   })
 }
 type():void {
   this.load=true;
 }
}
