import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})

export class ActorsComponent implements OnInit {

  actorsForm: FormGroup;

  constructor() { }

  ngOnInit() {
    /*this.actorsForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.maxLength(30)],
      salary: ['', Validators.required, Validators.min(0), Validators.max(1000000000)]
    });*/
  }

  addNewActor(): void {
  }

  deleteActor(event: any): void {
  }
}
