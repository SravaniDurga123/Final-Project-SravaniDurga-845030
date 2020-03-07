import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  sold:Purchase;
  item:Items[];
  i:number;
  constructor(private service:BuyerService) { 
    this.purchased();
    this.getItems();
  }

  ngOnInit() {
  }
  
 purchased():void{
   let buyerid=Number(localStorage.getItem('buyerid'));
       this.service.TranscationHistory(buyerid).subscribe(res=>{
        this.sold=res;
        console.log(this.sold);
        
       },err=>{
         console.log(err);
       })
       
 }
  getItems():void{
   
   let itemid=this.sold.itemId;
   console.log(itemid);
     this.service.GetItem(itemid).subscribe(res=>{
       this.item=res;
       console.log(this.item);
     })
  }
 
}
