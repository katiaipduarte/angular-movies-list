import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { MovieCategories } from '../movieCategories';
import { Movie } from '../movie';
import { Actor } from '../actor';
import { MoviesService } from '../movies.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements OnInit {

  faTrash = faTrash;
  faPlusCircle = faPlusCircle;
  moviesCategories: MovieCategories[];
  moviesSubcategories: String[];
  movieForm: FormGroup;
  movie: Movie;
  actorsList: FormArray;
  submitted = false;
  @Output() updateMoviesList: EventEmitter<any> = new EventEmitter();

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getMoviesCategories();
    this.movieForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      subcategory: [''],
      actorsList: this.formBuilder.array([ this.createActorForm() ])
    });
  }

  get f() {
    return this.movieForm.controls;
  }

  get formData() {
    return <FormArray>this.movieForm.get('actorsList');
  }

  // Methods to create form categories dropdowns
  getMoviesCategories(): void {
    this.moviesService.getMoviesCategories()
      .subscribe(moviesCategories => this.moviesCategories = moviesCategories);
  }

  categoryChange(event): void {
    this.moviesCategories.filter(i => {
      if (i.category === event.target.value) {
        this.moviesSubcategories = i.subcategory;
      }
    });
  }

  // Submit form related methods
  onSubmit() {
    this.movie = this.prepareSaveMovie();
    this.moviesService.addMovie(this.movie)
      .subscribe(movie => this.movie = movie);
    this.rebuildForm();
    this.moviesService.updateMoviesList();
  }

  prepareSaveMovie(): Movie {
    const formModel = this.movieForm.value;

    const id = document.querySelector('#movies').querySelectorAll('li').length + 1;
    const subcategory = Object.is(formModel.subcategory, 'Select a Subcategory') ?
                        '' : formModel.subcategory;

    const actorsList = this.movieForm.get('actorsList') as FormArray;
    let totalAmount = 0;
    const tmpActorsList = [];
    Array.from(actorsList.getRawValue()).forEach(function(actor, i) {
      totalAmount += +actor.salary;

      const tmpActor: Actor = {
        name: actor.actorName,
        salary: actor.salary
      };

      tmpActorsList.push(tmpActor);
    });

    const saveMovie: Movie = {
      id: id as number,
      name: formModel.name as string,
      category: formModel.category as string,
      subcategory: subcategory as string,
      actorsList: tmpActorsList as Actor[],
      totalAmount: totalAmount as number
    };

    return saveMovie;
  }

  rebuildForm() {
    this.actorsList = this.movieForm.get('actorsList') as FormArray;
    this.actorsList.reset(['', '']);
    while (this.actorsList.length > 1) {
      this.actorsList.removeAt(0);
    }
    this.movieForm.reset({
      name: '',
      category: '',
      subcategory: ''
    });
  }

  // Methods for actors list form
  // TODO: In the future separate this to a new Component
  createActorForm(): FormGroup {
    return this.formBuilder.group({
      actorName: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      salary: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(1000000000)])]
    });
  }

  addForm(): void {
    this.actorsList = this.movieForm.get('actorsList') as FormArray;
    this.actorsList.push(this.createActorForm());
  }

  deleteForm(index: number): void {
    const count = document.querySelectorAll('.actor-form').length;

    if (count !== 1) {
      this.actorsList = this.movieForm.get('actorsList') as FormArray;
      this.actorsList.removeAt(index);
    }
  }

  checkIfNumber(event) {
    const validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (validkeys.indexOf(event.key) < 0) {
      return false;
    }
  }
}
