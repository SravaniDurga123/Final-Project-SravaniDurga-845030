import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
 category:Category[];
  constructor(private service:AdminService) { 
    
     this.service.GetCategory().subscribe(res=>
      {
        this.category=res;
        console.log(this.category)
      },
      err=>{
        console.log(err);
      })
        
  }

  ngOnInit() {
  }
  
}
