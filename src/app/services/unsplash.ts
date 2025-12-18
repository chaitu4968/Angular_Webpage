// src/app/services/unsplash.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) {}

  searchImages(query: string, page: number) {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${environment.unsplashAccessKey}`
    });

    return this.http.get<any>(this.apiUrl, {
      headers,
      params: {
        query,
        page,
        per_page: 12
      }
    });
  }
}
