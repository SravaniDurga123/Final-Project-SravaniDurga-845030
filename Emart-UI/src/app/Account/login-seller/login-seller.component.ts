import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {
 LoginForm:FormGroup;
 seller:Seller;
 token:Token;
 load:boolean=true;
  constructor(private route:Router, private builder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.LoginForm=this.builder.group({
      sellername:[''],
      pwd:['']
    })
  }
 SellerLogin(){
   this.seller=new Seller();
   this.seller.sellername=this.LoginForm.value['sellername'];
   this.seller.pwd=this.LoginForm.value['pwd'];
   
   this.service.SellerLogin(this.seller.sellername,this.seller.pwd).subscribe(res=>{
     console.log("login");
     console.log(this.seller);
     this.token=res;
     console.log(this.token);
     if(this.token.msg=="success"){
        localStorage.setItem('sellername',this.seller.sellername.toString());
       localStorage.setItem('sellerid',this.token.sellerid.toString());
       localStorage.setItem('token',this.token.token.toString());
       console.log("seller component");
        this.route.navigateByUrl('/seller')
     }
     else {
       this.type();
     }
   },
   err=>{
     console.log(err);
   })
 }
 type(){
   this.load=false;
 }
}
