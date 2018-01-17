import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServicenameService {

  constructor(private http: HttpClient) {
    console.log(('service works'));
  }

  private data: any;

  requestContoller(url, type, options) {
    type === 'GET' ? this.getData(url) : this.postData(url, options);
    return this.data;
  }

  getData(url) {
    this.http.get(url).subscribe(data => {
      this.data = data;
    }, error => {
      console.log('error');
    });
    typeof this.data === 'undefined' ? this.getData(url) : console.log("ok");
  }

  postData(url, options) {
    console.log('postData');

    console.log(url + options);
  }
}
