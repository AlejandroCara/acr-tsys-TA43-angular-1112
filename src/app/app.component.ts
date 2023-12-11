import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RickapiService } from './rickapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'TA43';

  characters: any = null;

  constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundImage = "url(../assets/wallpapersden.com_rick-and-morty-season-6_3840x2160.jpg)";
            this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundSize = "cover";
            this.elementRef.nativeElement.ownerDocument
            .body.style.height = "100%";
    }
    
  ngOnInit() { 
    
  }

}
