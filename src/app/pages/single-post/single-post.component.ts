import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postData: any;
  similarPosts: any;
  constructor(private router: ActivatedRoute , private postService:PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (val) => {
        this.postService.updateViews(val['id']);
        this.postService.loadOnePost(val['id']).subscribe({
          next: (val) => {
            this.postData = val;
            this.loadSimilarPosts(this.postData.category.categoryId)
          }
        })
      }
    })
  }

  loadSimilarPosts(id: string) {
    this.postService.loadCategorySimilar(id).subscribe({
      next: (val) => {
        this.similarPosts = val;
      }
    });
  }
}
