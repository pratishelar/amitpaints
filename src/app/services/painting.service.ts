
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

 private apiUrl = 'https://strapi-production-d557.up.railway.app/api/paintings?populate=*';

  constructor(private http: HttpClient) {}

  getPaintings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
