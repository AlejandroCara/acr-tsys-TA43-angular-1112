import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit{

  character: any = null;

  constructor(private rickapi: RickapiService, private route: Router, private activeRoute: ActivatedRoute){

  }

  ngOnInit() {
    //Recuperar el id pasado por la url
    let urlId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.rickapi.getCharacterInfo(urlId).subscribe(
      result => {
        this.character = result
      }, error => {
        this.route.navigateByUrl("404");
      });
    this.rickapi.navItemClick(this.route.url);
  }

  characterDelete(id: number){
    this.rickapi.delete(id).subscribe(result => this.route.navigateByUrl("characters"));
  }

  sendDataToEditForm(id: number){

    let character: Character = new Character();
    character.id = id;
    character.name = (<HTMLInputElement>document.getElementById("charDetailsName")).innerHTML;
    character.image = (<HTMLInputElement>document.getElementById("charDetailsImage")).src;
    character.status = (<HTMLInputElement>document.getElementById("charDetailsStatus")).innerHTML.split(":")[1].trim();
    character.species = (<HTMLInputElement>document.getElementById("charDetailsSpecies")).innerHTML.split(":")[1].trim();
    character.gender = (<HTMLInputElement>document.getElementById("charDetailsGender")).innerHTML.split(":")[1].trim();
    character.origin = {
      name: (<HTMLInputElement>document.getElementById("charDetailsOrigin")).innerHTML.split(":")[1].trim()
    }
    
    this.rickapi.sendEditToForm(character);
  }
}
