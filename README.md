# AngularMoviesList

## Technologies used
* Angular6 for JavaScript framework, with TypeScript and ES6.
* Generate project with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.
* Used Webpack as module bundler.
* Bootstrap 4 as a front-end framework.
* FontAwesome for icons.
* SCSS for styling the HTML pages.
* Protractor for E2E testing.
* NPM and Yarn as package managers.

## Components
* Created two components one form listing 'movies', another to create 'movie-form'.
* Create three data models - 'Movie', 'Actor' and 'MovieCategories'.
* Create 'MoviesService' - movies.services.ts - file with the http services used in the app.
* Create dummy data in file in-memory-data.service.ts with HttpClientInMemoryWebApiModule.

## Development server

Run `ng serve --open` for a dev server, it will open in default browser `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build production

Run `ng build --prod --build-optimizer` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

