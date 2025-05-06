import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaintingService } from './services/painting.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from "./Carousel/Carousel.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CardComponent, CarouselComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  constructor() {}
}
