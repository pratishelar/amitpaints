import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../services/painting.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, RouterLink]
})
export class CardComponent implements OnInit {

  paintings: any[] = [];

   constructor(private paintingService: PaintingService) {}
 
   ngOnInit() {
     this.paintingService.getPaintings().subscribe((res: any) => {
       this.paintings = res.data;
       console.log( this.paintings);
     });
   }
}
