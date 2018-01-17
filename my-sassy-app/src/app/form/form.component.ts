import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  heroForm: FormGroup;

  hero = {};
  constructor() {
        this.hero = new Hero(18, 'Dr.IQ');
  }

  ngOnInit(): void {
    /*console.log(this.hero.name);*/
    this.heroForm = new FormGroup({
      'name': new FormControl([
        Validators.required,
        Validators.pattern(/d/),
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      'id': new FormControl([
        Validators.required,
        Validators.minLength(21)
      ])
    });
  }


}

