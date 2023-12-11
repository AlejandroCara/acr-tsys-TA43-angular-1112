import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  
  constructor(private rickapi: RickapiService, private route: Router){

  }
  
  ngOnInit(){
    this.rickapi.navItemClick(this.route.url);
    console.log(this.route.url);
  }

}
