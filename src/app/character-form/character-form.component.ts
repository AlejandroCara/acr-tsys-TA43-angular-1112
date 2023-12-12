import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router } from '@angular/router';
import { Character } from '../models/character.model';
import { Origin } from '../models/origin.model';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent implements OnInit{
  
  constructor(private rickapi: RickapiService, private route: Router){
    
  }

  ngOnInit() {
    this.rickapi.navItemClick(this.route.url);
    let character: Character = this.rickapi.getEditData();
    if(character.name != undefined){
      (<HTMLInputElement>document.getElementById("formName")).value = character.name;
      (<HTMLInputElement>document.getElementById("addButton")).hidden = true;
      (<HTMLInputElement>document.getElementById("editButton")).hidden = false;
    }
    
    (<HTMLInputElement>document.getElementById("formId")).value = (character.id as unknown as string);

    if(character.image != undefined){
      (<HTMLInputElement>document.getElementById("formImage")).value = character.image;
    }

    if(character.status != undefined){
      (<HTMLInputElement>document.getElementById("formStatus")).value = character.status;
    }

    if(character.species != undefined){
      (<HTMLInputElement>document.getElementById("formSpecies")).value = character.species;
    }

    if(character.gender != undefined){
      (<HTMLInputElement>document.getElementById("formGender")).value = character.gender;
    }

    if(character.origin?.name != undefined){
      (<HTMLInputElement>document.getElementById("formOrigin")).value = character.origin.name;
    }
  }

  onAdd(){
    let character: Character = new Character();
    let origin: Origin = new Origin();
    character.id = ((<HTMLInputElement>document.getElementById("formId")).value as unknown as number);
    character.name = (<HTMLInputElement>document.getElementById("formName")).value;
    character.image = (<HTMLInputElement>document.getElementById("formImage")).value;
    character.status = (<HTMLInputElement>document.getElementById("formStatus")).value;
    character.species = (<HTMLInputElement>document.getElementById("formSpecies")).value;
    character.gender = (<HTMLInputElement>document.getElementById("formGender")).value;
    origin.name = (<HTMLInputElement>document.getElementById("formOrigin")).value;
    character.origin = origin;

    this.rickapi.add(character).subscribe(result => this.route.navigateByUrl('character/'+character.id));

    
    (<HTMLInputElement>document.getElementById("formId")).value = "";
    (<HTMLInputElement>document.getElementById("formName")).value = "";
    (<HTMLInputElement>document.getElementById("formImage")).value = "";
    (<HTMLInputElement>document.getElementById("formSpecies")).value = "";
    (<HTMLInputElement>document.getElementById("formGender")).value = "";
    (<HTMLInputElement>document.getElementById("formOrigin")).value = "";
  }

  onEdit(){
    let character: Character = new Character();
    let origin: Origin = new Origin();
    character.id = ((<HTMLInputElement>document.getElementById("formId")).value as unknown as number);
    character.name = (<HTMLInputElement>document.getElementById("formName")).value;
    character.image = (<HTMLInputElement>document.getElementById("formImage")).value;
    character.status = (<HTMLInputElement>document.getElementById("formStatus")).value;
    character.species = (<HTMLInputElement>document.getElementById("formSpecies")).value;
    character.gender = (<HTMLInputElement>document.getElementById("formGender")).value;
    origin.name = (<HTMLInputElement>document.getElementById("formOrigin")).value;
    character.origin = origin;

    this.rickapi.update(character).subscribe(result => this.route.navigateByUrl('character/'+character.id));

    (<HTMLInputElement>document.getElementById("formId")).value = "";
    (<HTMLInputElement>document.getElementById("formName")).value = "";
    (<HTMLInputElement>document.getElementById("formImage")).value = "";
    (<HTMLInputElement>document.getElementById("formSpecies")).value = "";
    (<HTMLInputElement>document.getElementById("formGender")).value = "";
    (<HTMLInputElement>document.getElementById("formOrigin")).value = "";
  }
}
