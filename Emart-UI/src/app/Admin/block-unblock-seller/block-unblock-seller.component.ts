import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Models/seller';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-block-unblock-seller',
  templateUrl: './block-unblock-seller.component.html',
  styleUrls: ['./block-unblock-seller.component.css']
})
export class BlockUnblockSellerComponent implements OnInit {
 seller:Seller[];
 
  constructor(private service:AdminService) { 
    this.service.GetSellers().subscribe(res=>
      {
        this.seller=res;
        console.log(this.seller)
      },
      err=>{
        console.log(err);
      })
  }

  ngOnInit() {
  }

}
