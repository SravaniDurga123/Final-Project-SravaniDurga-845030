import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Items } from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Token } from 'src/app/Models/token';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
 item:Items;
 item1:Items;
 item2:Items;
 category:Category;
 subcategory:SubCategory
 sellerid:number
 ItemForm:FormGroup;
 id1:number;
 categoryid:number;
 subcategoryid:number;
 image:string;
 token:Token;
  constructor(private builder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.ItemForm=this.builder.group({
        itemname:['',Validators.required],
        price:[''],
        itemdescription:[''],
        stock:[''],
        remarks:['']
    });

    this.ViewItems();
    this.GetCategory();
    this.GetSubCategories();
  }
ViewItems():void{
 this.sellerid=Number(localStorage.getItem('sellerid'));
 console.log(this.sellerid);
  this.service.ViewItems(this.sellerid).subscribe(res=>{
    this.item=res;
    console.log("recived");
    console.log(this.item);
  },
  err=>{
    console.log(err);
  })
}
GetCategory():void {
  this.service.GetCategory().subscribe(res=>
    {
      this.category=res;
      console.log(this.category)
        this.GetSubCategories();
    },
    err=>{
      console.log(err);
    })
}
GetSubCategories():void{
 
  
  this.service.GetSubCategories().subscribe(res=>
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
Delete(itemid:number):void{
  this.service.DeleteItem(itemid).subscribe(res=>
    {
      console.log("record deleted");
      this.ViewItems();
    },
    err=>{
      console.log(err);
    })
}
Edit(id:number):void{

   this.service.GetItem(id).subscribe(res=>{
     this.item1=res;
     this.id1=this.item1.itemId;
     this.categoryid=this.item1.categoryId;
     this.subcategoryid=this.item1.subCategoryId;
     this.image=this.item1.image;
    console.log(this.id1);
     console.log(this.item1);
     this.ItemForm.setValue({
      itemname:this.item1.itemName,
      price:this.item1.price,
      itemdescription:this.item1.itemDescription,
      stock:this.item1.stock,
      remarks:this.item1.remarks
    })
   },
   err=>{
     console.log(err);
   })
  
}
Save():void{
  this.item2=new Items();
  this.item2.itemId=this.id1,
  this.item2.categoryId=this.categoryid,
  this.item2.subCategoryId=this.subcategoryid,
  this.item2.sellerId=Number(localStorage.getItem('sellerid')),
  this.item2.image=this.image;
  this.item2.itemName=this.ItemForm.value["itemname"],
  this.item2.price=this.ItemForm.value["price"],
  this.item2.stock=this.ItemForm.value["stock"],
  this.item2.itemDescription=this.ItemForm.value["itemdescription"],
  this.item2.remarks=this.ItemForm.value["remarks"],
  this.service.UpdateItem(this.item2).subscribe(res=>{
    console.log("updated succesfully");
    this.ViewItems();
  },
  err=>{
    console.log(err);
  })
}
}
