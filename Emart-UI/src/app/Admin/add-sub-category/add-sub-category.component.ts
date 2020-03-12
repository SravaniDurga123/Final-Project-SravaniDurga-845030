import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css'],
  providers:[AdminService]
})
export class AddSubCategoryComponent implements OnInit {
 AdminForm:FormGroup;
 submitted:boolean=false;
 subcategory:SubCategory;
 category:Category[];
 subcategory1:SubCategory[];
 i:number;
 load:boolean=false;
  constructor(private route:Router,private builder:FormBuilder,private service:AdminService) { }

  ngOnInit() {

  this.AdminForm=this.builder.group({
    subcategoryid:[''],
    subcategoryname:['',Validators.required],
    gst:[''],
    subcategorydetails:[''],
    categoryname:['']
     
  })
  this.GetCategory();
  }
  get f() { return this.AdminForm.controls; }
  onSubmit() {
   
    this.submitted=true;
  
    if(this.AdminForm.valid)
    {
     
      this.AddSubCategory();
      
    }
  }
 AddSubCategory(){
   let f=0;
   this.subcategory=new SubCategory();
   this.subcategory.subCategoryId=Math.floor(Math.random()*1000);
   this.subcategory.subCategoryName=this.AdminForm.value["subcategoryname"];
   this.subcategory.gst=this.AdminForm.value["gst"];
   this.subcategory.subCategoryDetails=this.AdminForm.value["subcategorydetails"];
   this.subcategory.categoryId=Number(this.AdminForm.value["categoryname"]);
   this.service.GetSubCategory().subscribe(res=>
    {
      this.subcategory1=res;
     
      for(this.i=0;this.i<(this.subcategory1).length;this.i++){
        if(this.subcategory.subCategoryName==this.subcategory1[this.i].subCategoryName){
          f=1;
          break;
        }
        else {
          f=0;
        }
    }
    
    if(f==0){
   this.service.AddSubCategory(this.subcategory).subscribe(res=>
    {
     
      this.route.navigateByUrl('/admin/view-subcategory')
    },
    err=>
    {
      console.log(err);
    }
    )
  }
  else {
    this.type();
  }
})
 }

  GetCategory()
  {
     this.service.GetCategory().subscribe(res=>
      {
        this.category=res;
        
      },
      err=>{
        console.log(err);
      })
  }
  type():void{
   this.load=true;
  }
  Reset(){
    this.submitted=false;
    this.AdminForm.reset();
  }
}
