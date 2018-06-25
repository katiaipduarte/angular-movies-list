import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MovieCategories } from '../movieCategories';
import { Movie } from '../movie';
import { Actor } from '../actor';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements OnInit {

  moviesCategories: MovieCategories[];
  moviesSubcategories: String[];
  movieForm: FormGroup;
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getMoviesCategories();
    this.movieForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      subcategory: ['Select a Subcategory']
    });
  }

  get f() {
    return this.movieForm.controls;
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

  onSubmit() {
    this.movie = this.prepareSaveMovie();
    this.moviesService.addMovie(this.movie)
      .subscribe();
    this.rebuildForm();
  }

  prepareSaveMovie(): Movie {
    const formModel = this.movieForm.value;

    let id = document.querySelector('#movies').querySelectorAll('li').length + 1;
    let subcategory = Object.is(formModel.subcategory, 'Select a Subcategory') ? 
                        '' : formModel.subcategory;
    const saveMovie: Movie = {
      id: id as number,
      name: formModel.name as string,
      category: formModel.category as string,
      subcategory: subcategory as string,
      actorsList: [] as Actor[],
      totalAmount: 0 as number
    }

    console.log(saveMovie);
    return saveMovie;
  }

  rebuildForm() {
    this.movieForm.reset({
      name: '',
      category: '',
      subcategory: 'Select a Subcategory'
    });
  }
}
