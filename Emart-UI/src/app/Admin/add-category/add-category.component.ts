import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers:[AdminService]
})
export class AddCategoryComponent implements OnInit {
 AdminForm:FormGroup;
 submitted:boolean=false;
 category:Category;
  constructor(private route:Router,private builder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.AdminForm=this.builder.group({
       categoryid:[''],
       categoryname:['',Validators.required],
       categorydetails:['']

    });
  }
  get f() { return this.AdminForm.controls; }

  onSubmit() {
    console.log("asudhaisu");
    this.submitted=true;
   console.log("asudhaisu");
    if(this.AdminForm.valid)
    {
      console.log("heell");
      this.AddCategory();
      console.log(JSON.stringify(this.AdminForm.value));
    }
  }
  AddCategory():void{
    this.category=new Category();
    this.category.categoryId=Math.floor(Math.random()*1000);
    this.category.categoryName=this.AdminForm.value["categoryname"];
    this.category.categoryDetails=this.AdminForm.value["categorydetails"];
    this.service.AddCategory(this.category).subscribe(res=>
      {
         console.log("record added");
         this.route.navigateByUrl('/admin/view-category');
      },
      err=>
      {
        console.log(err);
      }
      )
  }
  Reset(){
    this.submitted=false;
    this.AdminForm.reset();
  }
}
