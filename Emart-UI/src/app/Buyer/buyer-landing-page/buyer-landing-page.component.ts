import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
 name:string;
  constructor(private route:Router) { 
    if(!(localStorage.getItem('buyerid'))){
      this.route.navigateByUrl('/home/login-buyer');
    }
    this.name=localStorage.getItem('buyername');
    console.log(this.name);
  }

  ngOnInit() {
  }
 logout() {
   localStorage.removeItem('buyerid');

   localStorage.removeItem('token');
    localStorage.clear();
   this.route.navigateByUrl('/home/login-buyer');
 }
}
