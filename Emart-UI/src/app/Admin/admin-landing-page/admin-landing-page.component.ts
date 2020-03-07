import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  constructor(private route:Router) { 
    if(!(localStorage.getItem('admin'))){
      this.route.navigateByUrl('/home/login');
    }
  }

  ngOnInit() {

  }
  logout(){
    localStorage.removeItem('admin');
    this.route.navigateByUrl('/home/login');
  }
}
