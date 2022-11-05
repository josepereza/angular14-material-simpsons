import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {

  constructor(private http:HttpClient) { }
getAll(texto:string|null){
  return this.http.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=200&character=${texto}`)
}

}

