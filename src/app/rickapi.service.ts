import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  apiUrl: string = "http://localhost:3000/character/";
  tmpCharacter: Character = new Character;

  constructor(private http: HttpClient) { 
  }

  getCharacter(){
    let characterUrl = this.apiUrl;
    characterUrl += this.randomMinMax(1, 45);
    return this.http.get(characterUrl);
  }

  //Poner el nav-item pulsado como activo
  navItemClick(route: string){
    let navItems = document.getElementsByClassName("nav-link");
    console.log(route.split("/"))
    //Eliminar la clase active de todos los botones del nav
    for(let i = 0; i < navItems.length; i++){
      if((<HTMLInputElement>navItems[i]).getAttribute("routerLink") == route){
        (<HTMLInputElement>navItems[i]).classList.add("active")
      } else {
        (<HTMLInputElement>navItems[i]).classList.remove("active")
      }
    }

    if (route.split("/")[1] == "character"){
      (<HTMLInputElement>navItems[1]).classList.add("active")
    }
  }

  getCharacterInfo(id: number){
    let oneCharacterUrl = this.apiUrl;
    oneCharacterUrl += id;
    return this.http.get(oneCharacterUrl);
  }

  randomMinMax(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  add(character: Character): Observable<any>{
    return this.http.post(this.apiUrl, character);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  //Recibe los datos de un personaje para almacenarlos
  sendEditToForm(character: Character){
    this.tmpCharacter = character;
  }
}
