import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-single-catogry',
  templateUrl: './single-catogry.component.html',
  styleUrls: ['./single-catogry.component.css']
})
export class SingleCatogryComponent implements OnInit {
  posts: any;
  categoryObj: any;
  constructor(private route: ActivatedRoute , private postService:PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (val) => {
        this.categoryObj = val;
        this.postService.loadCategoryPost(val['id']).subscribe({
          next: (val) => this.posts = val
        })
      }
    })
  }
}
