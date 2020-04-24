import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {    
  }

  ngOnInit(): void {
    this.http.get<any[]>(this.url)
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

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .subscribe(response => {
      console.log(response)
    })
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.http.delete(this.url + "/" + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post.id);
        this.posts.splice(index, 1);
      })
  }
}
