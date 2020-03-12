import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {
  subcategory:SubCategory[];
 category:Category[];
 SubCategoryForm:FormGroup;
  getsubcategory:SubCategory;
  subcategory1:SubCategory;
  categoryid:number;
  subcategoryid:number;
  constructor(private builder:FormBuilder,private service:AdminService) {
    
     
   }

  ngOnInit() {
    this.GetCategory();
    this.GetSubCategory();
    this.SubCategoryForm=this.builder.group({
    
      subcategoryname:['',Validators.required],
      gst:[''],
      subcategorydetails:['']
       
    })
  
  }
  GetCategory():void {
    this.service.GetCategory().subscribe(res=>
      {
        this.category=res;
       
      },
      err=>{
        console.log(err);
      })
  }
  GetSubCategory():void{
    this.service.GetSubCategory().subscribe(res=>
      {
        this.subcategory=res;
        
      },
       err=>{
          console.log(err);
       }
        )
  }
  Delete(id:number):void{
   
    this.service.DeleteSubCategory(id).subscribe(res=>{
            console.log("record deleted");
            this.GetSubCategory();
    },
    err=>{
       console.log(err);
    }
    )
  }
  
  Search(id:number):void{
    this.service.GetSubCategoryId(id).subscribe(res=>
      {
        this.getsubcategory=res;
        this.categoryid=this.getsubcategory.categoryId;
        this.subcategoryid=this.getsubcategory.subCategoryId;
       
        this.SubCategoryForm.setValue({
          subcategoryname:this.getsubcategory.subCategoryName,
          gst:this.getsubcategory.gst,
          subcategorydetails:this.getsubcategory.subCategoryDetails,
        })
      },
      err=>{
        console.log(err);
      }
    )
      
  }
  Save():void{
    this.subcategory1=new SubCategory();
    this.subcategory1.categoryId=this.categoryid;
    this.subcategory1.subCategoryId=this.subcategoryid;
    this.subcategory1.subCategoryName=this.SubCategoryForm.value['subcategoryname'];
    this.subcategory1.subCategoryDetails=this.SubCategoryForm.value['subcategorydetails'];
    this.subcategory1.gst=this.SubCategoryForm.value['gst'];
    this.service.UpdateSubCategory(this.subcategory1).subscribe(res=>{
      console.log("updated");
      this.GetSubCategory();
    },
    err=>{
      console.log(err);
    })
  }
}

