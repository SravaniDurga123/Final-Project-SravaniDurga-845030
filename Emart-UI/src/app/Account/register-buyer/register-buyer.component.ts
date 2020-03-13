import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import {FormGroup,FormBuilder,Validators, MinLengthValidator} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css'],
  providers:[AccountService]
})
export class RegisterBuyerComponent implements OnInit {
 AccountForm:FormGroup;
 submitted:boolean=false;
 buyer:Buyer;
 load:boolean=false;
 load1:boolean=false;
 i:number;
 buyer1:Buyer[];
  constructor(private builder:FormBuilder,private service:AccountService ) { }

  ngOnInit() {
    this.AccountForm=this.builder.group({
     
      username:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      emailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(6)]],
      buyerid:[''],
      createdatetime:['']
    });
    // this.AccountForm=this.builder.group({
     

    // });
   
  }
  get f() { return this.AccountForm.controls; }
  onSubmit() {
    this.submitted=true;
    
   console.log("jdfgsd");
   
    if(this.AccountForm.valid)
    {
      console.log("heell");
      this.Register();
      console.log(JSON.stringify(this.AccountForm.value));
    }
    
  }
  Register():void
  {
    console.log("htkfhod");
      this.buyer =new Buyer();
      this.buyer.buyerId=Math.floor(Math.random()*1000);
      console.log(this.buyer.buyerId);
      this.buyer.username=this.AccountForm.value["username"];
      this.buyer.pwd=this.AccountForm.value["pwd"];
      this.buyer.emailid=this.AccountForm.value["emailid"];
      this.buyer.mobile=this.AccountForm.value["mobile"];
      this.buyer.createDateTime=new Date();
      console.log(this.buyer);
      this.service.BuyerRegister(this.buyer).subscribe(res=>
        {
          console.log('record added');
        },
        err=>
        {
          console.log(err);
        }
        )
  }
  Reset(){
    this.submitted=false;
    this.AccountForm.reset();
  }
  ExistUsername():void{
    let username=this.AccountForm.value["username"];
    let emailid=this.AccountForm.value["emailid"];
    this.service.GetBuyer().subscribe(res=>{
      this.buyer1=res;
        let f=0;
        for(this.i=0;this.i<this.buyer1.length;this.i++) {
          if(this.buyer1[this.i].username==username){
            f=1;
            break;
          }
          if(this.buyer1[this.i].emailid==emailid){
            f=2;

            break;
          }
        }
        if(f==1){
          this.load=true;
        }
        else {
        
          this.load=false;
        }
        if(f==2){
          this.load1=true;
        }
        else {
        
          this.load1=false;
        }
    })
  }
 
}
