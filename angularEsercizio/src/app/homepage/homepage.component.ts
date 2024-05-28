import { PostsService } from './../posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { SinglePostComponent } from '../single-post/single-post.component';
import { PostInterface } from '../../interfaces/post.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  post!: PostInterface
  related: PostInterface[] = [];
  posts: PostInterface[] = [];
  tags: string[] = [];
  filteredPosts: PostInterface[] = [];

  @ViewChild("singlePost") singlePost!: SinglePostComponent


  constructor(private postSrv: PostsService) {}

  ngOnInit() {
    this.posts = this.postSrv.getPosts();
    this.post = this.postSrv.getTopPost();
    this.related = this.postSrv.getRandomPosts(4);
    this.tags = this.postSrv.getUniqueTags()
    this.filteredPosts = this.posts; // Inizialmente mostra tutti i post, quando cliccato solo quelli dei tags

  }

  editPost() {
    alert("Edit successful!");
  }

  filterPostsByTag(tag: string) {
    this.filteredPosts = this.postSrv.getPostsByTag(tag);
  }
}
