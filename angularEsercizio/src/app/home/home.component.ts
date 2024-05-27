import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { iPost } from '../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postArr: iPost[] = [];

  constructor(private postSvc: PostsService) { }

  ngOnInit(){
    this.postArr = this.postSvc.posts;
  }

}
