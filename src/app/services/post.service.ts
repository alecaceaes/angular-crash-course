import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://my-json-server.typicode.com/typicode/demo/posts";
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handerError)
      );
  }

  createPost(post) {
    return this.http.post<any>(this.url, JSON.stringify(post))
      .pipe(
        catchError(this.handerError)
      );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError(this.handerError)
      );
  }
  
  deletePost(id) {
    return this.http.delete(this.url + "/" + id)
      .pipe(
        catchError(this.handerError)
      );
  }

  private handerError(error: Response) {
    if(error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return Observable.throw(new AppError(error));    
  }
}
