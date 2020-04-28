import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url)
      .pipe(
        map(response => response)
        //catchError(this.handerError)
      );
  }

  create(resource) {
    return this.http.post<any>(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response),
        catchError(this.handerError)
      );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response),
        catchError(this.handerError)
      );
  }
  
  delete(id) {
    return this.http.delete(this.url + "/" + id)
      .pipe(
        map(response => response),
        retry(3),
        catchError(this.handerError))
      .toPromise();
  }

  private handerError(error : Response) {
    if(error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return Observable.throw(new AppError(error));    
  }
}
