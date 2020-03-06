import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 LoginForm:FormGroup;
 username:string;
 pwd:string;
 load:boolean=true;
  constructor(private route:Router,private builder:FormBuilder) { }

  ngOnInit() {
   this.LoginForm=this.builder.group({
     username:[''],
     password:['']
   })
  }
  login(){
       this.username=this.LoginForm.value['username'];
       this.pwd=this.LoginForm.value['password'];
       if(this.username=="admin" && this.pwd=="admin"){
         this.load=true;
          this.route.navigateByUrl('admin');
       }
       else {
        this.type();
       }
  }
   type():void {
     this.load=false;
   }
}
