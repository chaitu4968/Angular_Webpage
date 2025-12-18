import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnsplashService } from '../../services/unsplash';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  currentQuery: string = '';
  images: any[] = [];

  loading: boolean = false;
  loadingMore: boolean = false;
  error: string = '';

  page: number = 1;
  hasFallbackTriggered: boolean = false;

  // 🔹 Modal state
  selectedImage: any = null;

  constructor(
    private unsplashService: UnsplashService,
    private cdr: ChangeDetectorRef
  ) {}

  /* ===================== */
  /* SEARCH LOGIC */
  /* ===================== */

  handleSearch(): void {                                              //It is a method inside a class.
    const query = this.currentQuery.trim();
    if (!query) return;

    this.currentQuery = query;
    this.page = 1;
    this.images = [];
    this.hasFallbackTriggered = false;
    this.searchImages(query);
  }

  private searchImages(query: string): void {
    this.loading = this.page === 1;
    this.loadingMore = this.page > 1;
    this.error = '';

    this.unsplashService.searchImages(query, this.page).subscribe({       //This is where app talks to backend(unsplash API)
      next: (response) => {
        this.loading = false;
        this.loadingMore = false;

        if (!response?.results?.length) {
          if (this.page === 1 && !this.hasFallbackTriggered) {
            this.error = 'No images found. Showing dogs instead.';
            this.triggerDogsFallback();
          }
          return;
        }

        this.images = [...this.images, ...response.results];
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.loadingMore = false;

        if (!this.hasFallbackTriggered) {
          this.error = 'Something went wrong. Showing dogs instead.';
          this.triggerDogsFallback();
        } else {
          this.error = 'Unable to load images.';
        }
      }
    });
  }

  loadMore(): void {
    if (this.loadingMore) return;
    this.page++;
    this.searchImages(this.currentQuery);
  }

  private triggerDogsFallback(): void {
    this.hasFallbackTriggered = true;
    this.currentQuery = 'dogs';
    this.page = 1;
    this.images = [];
    setTimeout(() => this.searchImages('dogs'), 500);
  }

  /* ===================== */
  /* IMAGE ACTIONS */
  /* ===================== */

  openImage(img: any): void {
    this.selectedImage = img;
  }

  closeModal(): void {
    this.selectedImage = null;
  }


  downloadImage(): void {
    if (!this.selectedImage?.links?.download) return;
    window.open(this.selectedImage.links.download, '_blank');
  }

  /**
   * Save image to browser (localStorage)
   */
  saveImage(): void {
    const saved = JSON.parse(localStorage.getItem('savedImages') || '[]');
    saved.push(this.selectedImage);
    localStorage.setItem('savedImages', JSON.stringify(saved));
    alert('Image saved!');
  }
}
