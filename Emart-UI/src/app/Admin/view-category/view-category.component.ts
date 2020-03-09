import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
 category:Category[];
 getcategory:Category;
 CategoryForm:FormGroup;
 category1:Category;
 categoryid:number;
  constructor(private builder:FormBuilder,private service:AdminService) { 
    
    
        
  }

  ngOnInit() {
   
  this.CategoryForm=this.builder.group({
    
    categoryname:['',Validators.required],
    categorydetails:['']
     
  })



    this.GetCategory();
  }
  DeleteCategory(id:number):void{
   this.service.DeleteCategory(id).subscribe(res=>{
     console.log("record deleted");
     this.GetCategory();
   },
   err=>
   {
     console.log(err);
   })
  
  }
  GetCategory():void
   {
  this.service.GetCategory().subscribe(res=>
    {
      this.category=res;
      console.log(this.category)
    },
    err=>{
      console.log(err);
    })
  }
  Search(categoryid:number):void
  {
  this.service.getCategoryId(categoryid).subscribe(res=>
   {
     this.getcategory=res;
      this.categoryid=this.getcategory.categoryId;
     console.log(this.getcategory);
     this.CategoryForm.setValue({
       
       categoryname:this.getcategory.categoryName,
       categorydetails:this.getcategory.categoryDetails,
    });
   }) 
   
  }
  Save():void{
      this.category1 =new Category();
      this.category1.categoryId=this.categoryid;
      this.category1.categoryName=this.CategoryForm.value['categoryname'];
      this.category1.categoryDetails=this.CategoryForm.value['categorydetails'];
      this.service.UpdateCategory(this.category1).subscribe(res=>{
        console.log("updated");
        this.GetCategory();
      },
      err=>{
        console.log(err);
      })
  }
}
