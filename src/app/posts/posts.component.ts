import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    http.get<any[]>(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }

    input.value = '';

    this.http.post<any>(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      })
  }
}
