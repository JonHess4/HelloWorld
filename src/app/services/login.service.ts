import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Account } from '../models/account';
import { EndpointsService } from './endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  loggedUser: Account;

  constructor(
    private http: HttpClient,
    private endpointsService: EndpointsService
  ) { }

  login(email: string, password: string): Observable<Account> {

    const url: string = this.endpointsService.LOGIN;
    const body = JSON.stringify(new Account(null, email, password, null, null));

    return this.http.post(url, body, {headers: this.headers, withCredentials: true }).pipe(
      map(resp => resp as Account)
    );
  }

  register(email: string, password: string): Observable<Account> {

    const url: string = this.endpointsService.REGISTER;
    const body = JSON.stringify(new Account(null, email, password, null, null));

    return this.http.post(url, body, {headers: this.headers, withCredentials: true }).pipe(
      map(resp => resp as Account)
    );

  }
}
