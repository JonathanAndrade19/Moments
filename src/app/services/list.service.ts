import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../interface/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  Api = environment.ApiAnimals;

  constructor(private http:HttpClient) { }

  remove(animals: Animal[], animal:Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.Api);
  }
}
