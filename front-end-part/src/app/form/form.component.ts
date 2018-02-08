import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  newTodo: string = '';
  toDoList = [];

  dayOfweek:string = 'Monday';

  getNewToDo(e) {
    this.toDoList.length = 0;
    if (this.newTodo) {
      this.http.post('http://localhost:8080/api/todos' + localStorage.getItem('email'), {
        "text": this.newTodo,
        "day" : this.dayOfweek
      }).subscribe(data => {
        this.toDoList.push(data);
        this.newTodo = null;
      });
    }
  }

  constructor(private http: HttpClient) {
  }

  logDay(){
    console.log(this.dayOfweek);
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/todos' + localStorage.getItem('email')).subscribe(data => {
      this.toDoList.push(data);
    });
  }

}
