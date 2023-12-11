import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any = [];

  constructor(private rickapi: RickapiService, private route: Router){

  }

  ngOnInit() {
    //Hacer multiples llamadas a la funcion del service que recupera personajes
    for(let i = 0; i < 8; i++){
      this.rickapi.getCharacter().subscribe(
        result => {
          this.characters.push(result);
        },
        error => {
          this.rickapi.getCharacter();
        });
    }
    this.rickapi.navItemClick(this.route.url);
  }
  
}
