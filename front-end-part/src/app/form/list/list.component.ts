import {Component, Input, OnInit, Renderer} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReversePipe} from "../../reverse.pipe";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() toDoList: any;
  @Input() selectedIndex:number;

  dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private renderer: Renderer,
              private http: HttpClient) {
  }

  setDone(id, day) {
    var item;
    for (item in this.toDoList[day]) {
      if (this.toDoList[day][item]._id === id) {
        item = this.toDoList[day][item];
        break;
      }
    }

    this.http.put('http://localhost:8080/api/todos/' + id + '&' + localStorage.getItem('email'), {
      status: !item.done
    }).subscribe(data => {
      item.done = !item.done;
    });
  }


  remove(e, id, day) {
    this.http.delete('http://localhost:8080/api/todos/' + id + '&' + localStorage.getItem('email')).subscribe(data => {
      for (let item in this.toDoList[day]) {
        if (this.toDoList[day][item]._id === id) {
          this.renderer.setElementStyle(e.target.parentElement, 'display', 'none');
          this.toDoList[day].slice([item], 1);
        }
      }
    });
  }

  ngOnInit() {

  }
}
