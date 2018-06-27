import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviesFormComponent } from './movies-form.component';

describe('MoviesFormComponent', () => {
  let component: MoviesFormComponent;
  let fixture: ComponentFixture<MoviesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFormComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
