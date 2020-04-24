import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.url);
  }

  createPost(post) {
    return this.http.post<any>(this.url, JSON.stringify(post))
      .pipe(catchError((error: Response) => {
        if(error.status === 400)
          return Observable.throw(new BadInput(error))

        return Observable.throw(new AppError(error));
      }));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }
  
  deletePost(id) {
    return this.http.delete(this.url + "/" + id)
      .pipe(catchError((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));      
      }));
  }
}
