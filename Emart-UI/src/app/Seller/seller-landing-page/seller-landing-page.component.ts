import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
 name:string;
  constructor(private route:Router) { 
    if(!(localStorage.getItem('sellerid'))){
      this.route.navigateByUrl('/home/login-seller');
    }
    this.name=localStorage.getItem("sellername");
    console.log(this.name);
  }

  ngOnInit() {
  } 
 logout(){
   localStorage.removeItem('sellerid');
   localStorage.removeItem('token');
   localStorage.clear();
   this.route.navigateByUrl('home/login-seller')
 }
}
