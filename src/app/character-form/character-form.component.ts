import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router } from '@angular/router';
import { Character } from '../models/character.model';

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
  }

  onAdd(){
    let character: Character = new Character();
    character.id = ((<HTMLInputElement>document.getElementById("formId")).value as unknown as number);
    character.name = (<HTMLInputElement>document.getElementById("formName")).value;
    character.image = (<HTMLInputElement>document.getElementById("formImage")).value;
    character.status = (<HTMLInputElement>document.getElementById("formStatus")).value;
    character.species = (<HTMLInputElement>document.getElementById("formSpecies")).value;
    character.gender = (<HTMLInputElement>document.getElementById("formGender")).value;
    character.origin = {
      name: (<HTMLInputElement>document.getElementById("formOrigin")).value
    }

    this.rickapi.add(character).subscribe(result => this.route.navigateByUrl('character/'+character.id));

    
    (<HTMLInputElement>document.getElementById("formId")).value = "";
    (<HTMLInputElement>document.getElementById("formName")).value = "";
    (<HTMLInputElement>document.getElementById("formImage")).value = "";
    (<HTMLInputElement>document.getElementById("formSpecies")).value = "";
    (<HTMLInputElement>document.getElementById("formGender")).value = "";
    (<HTMLInputElement>document.getElementById("formOrigin")).value = "";
  }
}
