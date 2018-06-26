import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  orderBy = [
              {name: 'Total cost (low to high)', value: 'ASC'},
              {name: 'Total cost (high to low)', value: 'DESC'}
  ];

  constructor(private moviesService: MoviesService) {
    this.moviesService.listen().subscribe((m: any) => {
      this.updateMoviesList();
    });
  }

  ngOnInit() {
    this.getMoviesByOrder('ASC');
  }

  getMoviesByOrder(orderBy: string): void {
    this.moviesService.getMovies(orderBy)
      .subscribe(movies => this.movies = movies);
  }

  updateMoviesList() {
    const currentOrderBy = (<HTMLInputElement>document.querySelector('#orderBy')).value;
    this.getMoviesByOrder(currentOrderBy);
  }
}
