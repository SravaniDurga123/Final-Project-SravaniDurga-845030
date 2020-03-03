import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';

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
  constructor(private builder:FormBuilder,private service:AdminService) { }

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
    console.log("asudhaisu");
    this.submitted=true;
   console.log("asudhaisu");
    if(this.AdminForm.valid)
    {
      console.log("heell");
      this.AddSubCategory();
      console.log(JSON.stringify(this.AdminForm.value));
    }
  }
 AddSubCategory(){
   this.subcategory=new SubCategory();
   this.subcategory.subCategoryId=Math.floor(Math.random()*1000);
   this.subcategory.subCategoryName=this.AdminForm.value["subcategoryname"];
   this.subcategory.gst=this.AdminForm.value["gst"];
   this.subcategory.subCategoryDetails=this.AdminForm.value["subcategorydetails"];
   this.subcategory.categoryId=Number(this.AdminForm.value["categoryname"]);
   this.service.AddSubCategory(this.subcategory).subscribe(res=>
    {
      console.log("record added");
    },
    err=>
    {
      console.log(err);
    }
    )
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
}
