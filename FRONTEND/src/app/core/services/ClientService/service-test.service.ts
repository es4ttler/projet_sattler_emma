import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/Client';
import { ApiService } from '../ApiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService extends ApiService{

  constructor(private http: HttpClient) { 
    super()
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl+"clients");
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl+"client"+"/"+id);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl+"client", client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl+"client", client);
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(this.apiUrl+"client"+"/"+id);
  }
  
}