import { Component, OnInit } from '@angular/core';

import { MovieCategories } from '../movieCategories';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements OnInit {

  moviesCategories: MovieCategories[];
  moviesSubcategories: String[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMoviesCategories();
  }

  getMoviesCategories(): void {
    this.moviesService.getMoviesCategories()
      .subscribe(moviesCategories => this.moviesCategories = moviesCategories);
  }

  categoryChange(event): void {
    this.moviesCategories.filter(i => {
      if (i.category == event.target.value) {
        this.moviesSubcategories = i.subcategory;
      }
    });
  }
}
