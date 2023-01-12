import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/Client';
import { ApiService } from '../ApiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiService{

  constructor(private http: HttpClient) { 
    super()
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"login", {login: login, password: password});
  }
  
  register(client: Client) {
    return this.http.post(`${this.apiUrl}client/add`, client);
  }
}
