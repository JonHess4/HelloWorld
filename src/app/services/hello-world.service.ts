import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { HelloWorldModel } from '../models/hello-world-model';
import { EndpointsService } from './endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(
    private http: HttpClient,
    private endpointsService: EndpointsService
  ) { }

  getHelloWorldById(id: number): Observable<HelloWorldModel> {

    const url: string = this.endpointsService.GET_HELLO_WORLD_BY_ID;

    console.log(url);

    return this.http.get(url.replace('${id}', id.toString()), { withCredentials: true }).pipe(
      map(resp => resp as HelloWorldModel)
    );

  }

}
