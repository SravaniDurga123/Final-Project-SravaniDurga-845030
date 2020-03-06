import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 private load:boolean=false;
  constructor(private route:Router,private builder:FormBuilder,private service:BuyerService) { }
  SearchForm:FormGroup;
  item:Items[];
  item1:Items;
  itemname:string;
  p:Purchase;
  token:Token;
  load1:boolean=false;
  ngOnInit() {
    this.SearchForm=this.builder.group({
      itemName:['']
    })
  }
//  onload():void{
//    console.log("load");
//     this.load=true;
//  }
 SearchItem():void{
 this.itemname=this.SearchForm.value["itemName"];
 console.log(this.itemname);
    this.service.SearchItems(this.itemname).subscribe(res=>{
      console.log("item searched");
      this.item=res;
      this.item1=res;
      console.log(this.item);
      if((this.item).length==0)
      {
        this.type();
      }
      else{
        this.load=true;
      }
    })
 }
  buyItem(item:Items):void{
    localStorage.setItem('item',JSON.stringify(item));
     this.route.navigateByUrl('/buyer/buy-product')
  }
  type():void{
    this.load1=true;
  }
}
