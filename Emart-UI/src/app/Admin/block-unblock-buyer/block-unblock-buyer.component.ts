import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-block-unblock-buyer',
  templateUrl: './block-unblock-buyer.component.html',
  styleUrls: ['./block-unblock-buyer.component.css']
})
export class BlockUnblockBuyerComponent implements OnInit {
 buyer:Buyer
  constructor(private service:AdminService) { 
    this.service.GetBuyers().subscribe(res=>
      {
        this.buyer=res;
        console.log(this.buyer);
      },
      err=>{
        console.log(err);
      })
  }

  ngOnInit() {

  }

}
