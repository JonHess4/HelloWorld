import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public readonly baseURL = 'http://localhost:8080/'; //environment.url; 

  public readonly GET_HELLO_WORLD_BY_ID: string = this.baseURL + "hello-world-service/hello-world/${id}";

  public readonly LOGIN: string = this.baseURL + "slate-account-service/login";

  public readonly REGISTER: string = this.baseURL + "slate-account-service/register";

  constructor() {}
}
