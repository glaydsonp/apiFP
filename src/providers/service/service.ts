import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(
    public http: Http,
    public httpClient: HttpClient,
    // public observable: Observable<>
    ) {}

  api : string = 'http://localhost:80/apifp/';

  getData() {
    return this.http.get(this.api + 'dados.php').pipe(map(res => res.json()));
  }
  updateData(data) {
    console.log(data);
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post(this.api + "update.php", data, options).map(res => console.log(res))
    .subscribe(res=> { 
      console.log(res);
    })
  }

}
