import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsFeature: any;
  postsLatest: any;

  constructor(private postService:PostsService){}

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe({
      next: (val) => {
        this.postsFeature = val;
      }
    });

    this.postService.loadLatest().subscribe({
      next: (val) => {
        this.postsLatest = val;
      }
    })

  }

}
