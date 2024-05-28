import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { PostInterface } from '../../interfaces/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: PostInterface[] = [];
  active!: PostInterface[];

constructor(private postSrv: PostsService) {}
  ngOnInit() {
    this.active = this.postSrv.getActivePosts();
  }

}
