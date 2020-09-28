import { Component, OnInit } from '@angular/core';
import { mockData } from '../mock/mock-data';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts = mockData;

  constructor() { }

  ngOnInit(): void {
  }

}
