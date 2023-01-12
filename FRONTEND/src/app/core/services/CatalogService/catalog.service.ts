import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Fruit } from '../../models/Fruit';
import { Observable } from 'rxjs';
import { ApiService } from '../ApiService/api.service';

@Injectable({
  providedIn: 'root'
})

export class CatalogService extends ApiService {

  constructor(private http: HttpClient) { 
    super()
  }
  env = environment;

  getAll(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl+"fruits");
  }

  getById(id: number): Observable<Fruit> {
    return this.http.get<Fruit>(this.apiUrl+"fruit/"+id);
  }

  addFruit(Fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.apiUrl+"fruit/", Fruit);
  }

  updateFruit(Fruit: Fruit): Observable<Fruit> {
    return this.http.put<Fruit>(this.apiUrl+"fruit/", Fruit);
  }

  deleteFruit(id: number): Observable<Fruit> {
    return this.http.delete<Fruit>(this.apiUrl+"fruit/"+id);
  }
}
