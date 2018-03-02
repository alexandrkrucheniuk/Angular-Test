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
  dayOfweek: string = 'Monday';

  getNewToDo(e) {
    if (this.newTodo) {
      this.http.post('http://localhost:8080/api/todos' + localStorage.getItem('email'), {
        "text": this.newTodo,
        "day": this.dayOfweek
      }).subscribe(data => {
        this.toDoList = this.sort(data);
        this.newTodo = null;
      });
    }
  }

  sort(data) {
    let list = [[], [], [], [], [], [], []];

    for (let i in data) {
      if (data[i].day === 'Monday') {
        list[0].push(data[i]);
      }
      if (data[i].day === 'Tuesday') {
        list[1].push(data[i]);
      }
      if (data[i].day === 'Wednesday') {
        list[2].push(data[i]);
      }
      if (data[i].day === 'Thursday') {
        list[3].push(data[i]);
      }
      if (data[i].day === 'Friday') {
        list[4].push(data[i]);
      }
      if (data[i].day === 'Saturday') {
        list[5].push(data[i]);
      }
      if (data[i].day === 'Sunday') {
        list[6].push(data[i]);
      }
    }


    for (let i in list) {
      // if no task for day
      if (list[i].length === 0) {
        list[i] = null
      }
      else {
        // reversing list
        list[i] = list[i].reverse();
      }
    }
    return list;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/todos' + localStorage.getItem('email')).subscribe(data => {
      this.toDoList = this.sort(data);

      let nullCounter = 0;
      for (let i = 0; i < 8; i++) {
        if (this.toDoList[i] === null) {
          nullCounter++;
        }
      }
      if(nullCounter === 7){
        this.toDoList = null;
      }

      console.log(this.toDoList);
    });
  }
}
