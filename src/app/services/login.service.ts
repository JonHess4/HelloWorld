import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { EndpointsService } from './endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User;

  constructor(
    private http: HttpClient,
    private endpointsService: EndpointsService
  ) { }

  login(email: string, password: string): Observable<User> {

    const url: string = this.endpointsService.LOGIN;
    const body = JSON.stringify(new User(null, email, password, null, null));

    return this.http.post(url, body, { withCredentials: true }).pipe(
      map(resp => resp as User)
    );
  }

  register(email: string, password: string): Observable<User> {

    const url: string = this.endpointsService.REGISTER;
    const body = JSON.stringify(new User(null, email, password, null, null));

    return this.http.post(url, body, { withCredentials: true }).pipe(
      map(resp => resp as User)
    );

  }
}
