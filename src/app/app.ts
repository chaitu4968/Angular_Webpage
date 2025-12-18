// src/app/app.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchBar } from './components/search-bar/search-bar';
import { UnsplashService } from './services/unsplash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Image Search Engine';
  hasFallbackTriggered = false;
  images: any[] = [];
  loading = false;
  error = '';

  currentQuery = '';
  page = 1;
  selectedImage: any | null = null;

  constructor(
    private unsplashService: UnsplashService,
    private cdr: ChangeDetectorRef          // 🔑 inject CDR
  ) {}
  // ngOnInit(): void {
  //   this.onSearch("Beaches")
  // }
  onSearch(query: string) {
  this.currentQuery = query;
  this.page = 1;
  this.images = [];
  this.loading = true;
  this.error = '';
  this.selectedImage = null;

  this.unsplashService.searchImages(query, this.page).subscribe({
    next: (response) => {
      this.loading = false;
      this.hasFallbackTriggered = false; // reset on success
      console.log("Triggered")

      if (!response?.results || response.results.length === 0) {
        this.error = 'No images found. Showing dogs instead.';
        this.triggerDogsFallback();
        return;
      }

      this.images = response.results;
    },

    error: (err) => {
      this.loading = false;

      if (!this.hasFallbackTriggered) {
        this.error = 'Something went wrong. Showing dogs instead.';
        this.triggerDogsFallback();
      } else {
        this.error = 'Unable to load images. Please try again later.';
      }
    }
  });
}
private triggerDogsFallback() {
  this.hasFallbackTriggered = true;

  // small delay so user sees message
  setTimeout(() => {
    this.onSearch('dogs');
  }, 500);
}


  loadMore() {
    if (!this.currentQuery) return;

    this.page++;
    this.loading = true;
    this.error = '';

    this.unsplashService.searchImages(this.currentQuery, this.page).subscribe({
      next: (response) => {
        this.loading = false;

        const existingIds = new Set(this.images.map(img => img.id));
        const newImages = response.results.filter(
          (img: any) => !existingIds.has(img.id)
        );

        this.images = [...this.images, ...newImages];

        this.cdr.markForCheck();           // 🔑 ensure UI updates
         // smooth scroll to the Load More button
      setTimeout(() => {
        const btn = document.querySelector('.load-more');
        btn?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
      },
      error: () => {
        this.loading = false;
        this.error = 'Unable to load more images.';
        this.cdr.markForCheck();           // 🔑
      }
    });
  }

  openImage(image: any) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
