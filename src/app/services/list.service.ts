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

  remove(id: number){
    return this.http.delete<Animal>(`${this.Api}/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.Api);
  }
}
