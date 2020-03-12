import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/Models/token';

@Component({
  selector: 'app-login-buyer',
  templateUrl: './login-buyer.component.html',
  styleUrls: ['./login-buyer.component.css']
})
export class LoginBuyerComponent implements OnInit {
 BuyerLoginForm:FormGroup;
 buyer:Buyer;
 token:Token;
 load:boolean=true;
  constructor(private route:Router,private builder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.BuyerLoginForm=this.builder.group({
      buyername:[''],
      pwd:['']
    })
  }
  BuyerLogin():void {
    this.buyer =new Buyer();
    this.buyer.username=this.BuyerLoginForm.value['buyername'];
    this.buyer.pwd=this.BuyerLoginForm.value['pwd'];
    console.log(this.buyer.username);
    this.service.BuyerLogin(this.buyer.username,this.buyer.pwd).subscribe(res=>{
      this.token=res;
      console.log(this.token);
      if(this.token.msg=="success"){
        this.load=true;
        localStorage.setItem('buyername',this.buyer.username);
        localStorage.setItem('buyerid',this.token.buyerid.toString());
        localStorage.setItem('token',this.token.token.toString());
        this.route.navigateByUrl('/buyer');
      }
      else{
        this.type();
      }
    })
  
  }
  type():void {
    console.log("sadh")
    this.load=false;
  }
}
