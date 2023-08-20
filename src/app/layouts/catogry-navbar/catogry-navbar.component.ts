import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-catogry-navbar',
  templateUrl: './catogry-navbar.component.html',
  styleUrls: ['./catogry-navbar.component.css']
})
export class CatogryNavbarComponent implements OnInit{
  caregoryArray!: any;
  constructor(private categoryService:CategoriesService){}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe({
      next: (val) => this.caregoryArray = val
    })
  }

}
