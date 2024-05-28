import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { PostInterface } from '../../interfaces/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts: PostInterface[] =  []
  inactive!: PostInterface[]


constructor(private postSrv: PostsService) {}
  ngOnInit(){
    this.inactive = this.postSrv.getinactivePosts()
  }


}
