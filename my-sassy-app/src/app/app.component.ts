import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dsfcsdfsdf = '11111';
  buttonEvent;

  @Input() age: number;

  fsad(): void {
    console.log(this.age);
  }

  getColor(e) {
    //console.dir(e.target);
    this.buttonEvent = e.target;
    console.log(this.buttonEvent);
  }
}
