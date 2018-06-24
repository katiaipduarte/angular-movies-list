import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Movie } from './movie';
import { Actor } from './actor';
import { MovieCategories } from './movieCategories';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // URL to web api
  private moviesAPIUrl = 'api/movies';
  private categoriesAPIUrl = 'api/categories';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: log to external file
      console.error(`${operation} faile: ${error.message}`);

      return of(result as T);
    };
  }

  getMovies(orderBy: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesAPIUrl)
    .pipe(
      map(results => Object.is(orderBy, 'ASC')
                        ? results.sort((a, b) => a.totalAmount - b.totalAmount)
                        : results.sort((a, b) => b.totalAmount - a.totalAmount)),
      catchError(this.handleError('getMovies', []))
    );
  }

  getMoviesCategories(): Observable<MovieCategories[]> {
    return this.http.get<MovieCategories[]>(this.categoriesAPIUrl)
    .pipe(
      catchError(this.handleError('getMoviesCategories', []))
    );
  }
}
