import {Component, OnInit, Input} from '@angular/core';
import {ServicenameService} from '../servicename.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  @Input() crypromusu: string;

  resievData;

  constructor(private servicenameService: ServicenameService) {
  }

  ngOnInit() {
  }


  myClick(e) {
    e.preventDefault();
    this.resievData = this.servicenameService.requestContoller('https://api.github.com/users/seeschweiler', 'GET', null);
    console.log(this.resievData);
  }

}
