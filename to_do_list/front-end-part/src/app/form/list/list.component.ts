import {Component, Input, OnInit, Renderer} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    this.renderer.setElementClass(e.target.parentElement, "done", true);
    this.toDoList[index].done = !this.toDoList[index].done;




    this.customFunction();
  }

  remove(e, index) {
    this.renderer.destroyView(e.target, e.target.parentElement);
    this.toDoList.splice(index, 1);

  }


  customFunction(){
    console.log("get");
    this.http.get('http://localhost:8080/api/todos').subscribe(data => {
      console.log(data);
    }, error => {
      console.log('error');
    });

    console.log("post");
    this.http.post('http://localhost:8080/api/todos',{
      "text":"firts to do"
    }).subscribe(data =>{
      console.log(data);
    })


  }


  ngOnInit() {
  }
}
