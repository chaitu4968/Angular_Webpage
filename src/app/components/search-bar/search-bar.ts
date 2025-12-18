// src/app/components/search-bar/search-bar.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="search-form">
      <input
        type="text"
        name="query"
        [(ngModel)]="query"
        placeholder="Search images (e.g. mountains, office, cats)…"
        class="search-input"
      />
      <button type="submit" class="search-button">
        Search
      </button>
    </form>
  `
})
export class SearchBar {
  query = '';

  @Output() search = new EventEmitter<string>();

  onSubmit() {
    const trimmed = this.query.trim();
    if (!trimmed) return;
    this.search.emit(trimmed);
  }
}
