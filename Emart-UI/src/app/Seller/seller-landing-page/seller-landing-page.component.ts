import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {

  constructor(private route:Router) { 
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home/login-seller');
    }
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
