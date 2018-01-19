import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newTodo: string = '';

  toDoList = [];

  todoObj: any;

  getNewToDo(e) {
    if(this.newTodo){
      this.todoObj = {
        newToDo: this.newTodo,
        done: false
      };
      this.toDoList.push(this.todoObj);
      this.newTodo = null;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
