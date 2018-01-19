import {Component, Input, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() toDoList: any;

  constructor(private renderer: Renderer) {
  }

  setDone(e, index) {
    this.renderer.setElementClass(e.target.parentElement, "done", true);
    this.toDoList[index].done = !this.toDoList[index].done;
  }

  remove(e, index) {
    this.renderer.destroyView(e.target, e.target.parentElement);
    this.toDoList.splice(index, 1);

  }

  ngOnInit() {
  }
}
