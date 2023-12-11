import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private rickapi: RickapiService, private route: Router){

  }
  
  ngOnInit(){
    this.rickapi.navItemClick(this.route.url);
    console.log(this.route.url);
  }


}
