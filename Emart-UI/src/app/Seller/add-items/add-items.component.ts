import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  category:Category[];
  subcategory:SubCategory[];
  item:Items;
  ItemForm:FormGroup;
  submitted:boolean=false;
  filename:string;
  constructor(private route:Router,private builder:FormBuilder ,private service:SellerService) { }

  ngOnInit() {
  this.ItemForm=this.builder.group({
     categoryname:[''],
    subcategoryname:[''],
    itemname:['',Validators.required],
    stock:[''],
    price:['',Validators.required],
    itemdescription:[''],
   remarks:[''],
  
  });
  
  this.GetCategory();

  }
  get f() { return this.ItemForm.controls; }
  onSubmit()
   {
    console.log("asudhaisu");
    this.submitted=true;
   console.log("asudhaisu");
    if(this.ItemForm.valid)
    {
      console.log("heell");
     this.AddItem();
     
    }
  }
  GetCategory():void {
    this.service.GetCategory().subscribe(res=>
      {
        this.category=res;
        console.log(this.category)
          this.GetSubCategory();
      },
      err=>{
        console.log(err);
      })
  }
  GetSubCategory():void{
    let categoryid=Number(this.ItemForm.value["categoryname"]);
    console.log(categoryid);
    this.service.GetSubCategory(categoryid).subscribe(res=>
      {
        this.subcategory=res;
        console.log("hai"+this.subcategory);
        console.log(this.subcategory)
      },
       err=>{
          console.log(err);
       }
        )
  }

  AddItem():void{
   this.item=new Items();
   this.item.categoryId=Number(this.ItemForm.value["categoryname"]);
   this.item.subCategoryId=Number(this.ItemForm.value["subcategoryname"]);
   this.item.sellerId=Number(localStorage.getItem('sellerid'));
   this.item.itemId=Math.floor(Math.random()*1000);
   this.item.itemName=this.ItemForm.value["itemname"];
   this.item.itemDescription=this.ItemForm.value["itemdescription"];
   this.item.price=this.ItemForm.value["price"];
   this.item.stock=this.ItemForm.value["stock"];
   this.item.remarks=this.ItemForm.value["remarks"];
   this.item.image=this.filename;
   this.service.AddItem(this.item).subscribe(res=>{
      console.log("record added");
      console.log(this.item);
      this.route.navigateByUrl('/seller/view-items')
   },
   err=>{
     console.log(err);
   })
  }
  onFileUpload(event){
    const file = event.target.files[0]
    this.filename=file.name;
    console.log(this.filename);
    console.log(file)
    }
  Reset(){
    this.submitted=false;
    this.ItemForm.reset();
  }
}
