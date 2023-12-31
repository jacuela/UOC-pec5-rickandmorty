import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CharacterDTO } from '../models/characterDTO';


@Injectable({
  providedIn: 'root'
})
export class CharacteresService {

  constructor(private http:HttpClient) { }


  // getAllCharacteres(): Observable<CharacterDTO[]>{
  //   return this.http.get<CharacterDTO[]>('https://rickandmortyapi.com/api/character')
  // }

  getAllCharacteres(): Observable<any>{
       return this.http.get<any>('https://rickandmortyapi.com/api/character')
  }
  
  getCharacterById(id: string | null): Observable<CharacterDTO>{
    return this.http.get<CharacterDTO>('https://rickandmortyapi.com/api/character/'+id);
}



}
