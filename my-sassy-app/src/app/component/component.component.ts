import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  @Input() age: string;
  @Input() name: string;
  @Output() colorValue: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.age);
    console.log(this.name);

  }

  btnClick(e) {
    this.colorValue.emit(e);
  }

}
