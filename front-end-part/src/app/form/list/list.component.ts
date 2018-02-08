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

  constructor(private renderer: Renderer,
              private http: HttpClient) {
  }

  setDone(e, index) {
     this.http.put('http://localhost:8080/api/todos/' + this.toDoList[0][index]._id, null).subscribe(data => {
       this.renderer.setElementClass(e.target.parentElement, "done", true);
       this.toDoList[0][index].done = !this.toDoList[0][index].done;
     })

  }

  remove(e, index) {
    this.http.delete('http://localhost:8080/api/todos/' + this.toDoList[0][index]._id).subscribe(data => {
      this.renderer.destroyView(e.target, e.target.parentElement);
      this.toDoList[0].splice(index, 1);
    });
  }

  ngOnInit() {
  }
}
