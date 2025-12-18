// src/app/app.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchBar } from './components/search-bar/search-bar';
import { UnsplashService } from './services/unsplash';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  


  }
