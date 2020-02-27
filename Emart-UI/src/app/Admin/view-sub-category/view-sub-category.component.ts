import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {
  subcategory:SubCategory[];

  constructor(private service:AdminService) {
     this.service.GetSubCategory().subscribe(res=>
    {
      this.subcategory=res;
      console.log(this.subcategory);
    },
     err=>{
        console.log(err);
     }
      )
   }

  ngOnInit() {
  }

}
