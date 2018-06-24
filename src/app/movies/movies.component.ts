import { Component, OnInit } from '@angular/core';

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

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMoviesByOrder('ASC');
  }

  getMoviesByOrder(orderBy: string): void {
    this.moviesService.getMovies(orderBy)
      .subscribe(movies => this.movies = movies);
  }
}
