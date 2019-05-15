import { Component, OnInit} from '@angular/core';
import {PostService} from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService){

  }
  ngOnInit(){
      this.service.getPosts().subscribe((result) => {
        this.posts = result
      },
      (err)=> {
        console.log(err);
      })
  }
  add(){
    console.log("navigate to add page");
  }
}