import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
 cartForm:FormGroup;
 private name1:number;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.cartForm=this.builder.group({
      name:['']
    })
  }
 minu():void{
   this.name1=Number(this.cartForm.value['name']);
   console.log(this.name1);
   this.name1=this.name1--;
   this.cartForm.setValue({
     name:this.name1
   })
 }
 plus():void{
  this.name1=Number(this.cartForm.value['name']);
   console.log(this.name1);
   this.name1=this.name1++;
   this.cartForm.setValue({
     name:this.name1
   })
 }
}
