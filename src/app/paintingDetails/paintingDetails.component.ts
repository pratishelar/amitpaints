import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaintingService } from '../services/painting.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paintingDetails',
  templateUrl: './paintingDetails.component.html',
  styleUrls: ['./paintingDetails.component.css'],
  imports: [CommonModule],
})
export class PaintingDetailsComponent implements OnInit {
  painting: any;
  imageUrls: any = [];

  selectedImage = this.imageUrls[0];

  selectImage(img: string) {
    this.selectedImage = img;
  }

  constructor(
    private route: ActivatedRoute,
    private paintingService: PaintingService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.paintingService.getPaintingById(id).subscribe((res) => {
        const data = res.data;

        this.painting = {
          id: data.id,
          ...data,
        };

        this.Imagearray();
        
        console.log(this.painting);
      });
    }
  }

  Imagearray() {
    this.imageUrls = this.painting.Image.map(
      (img: any) => 'https://strapi-production-d557.up.railway.app' + img.url
    );
    this.selectedImage = this.imageUrls[0];
  }
}
