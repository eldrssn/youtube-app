import { Component, OnInit } from '@angular/core';
import { data } from 'src/mock/mokedData';
import { SearchItem } from './types/search-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-app';

  isDisplayFilter = false;
  isDisplayResultBlock = false;

  searchQuery: string = '';

  dateSortDirection: false | 0 | 1 = false;
  viewsSortDirection: false | 0 | 1 = false;

  cards: SearchItem[] = data.items;

  displayResultBlock() {
    this.isDisplayResultBlock = true;
  }

  setSortByDate() {
    if (this.dateSortDirection === false) {
      this.viewsSortDirection = false;
      this.dateSortDirection = 1;
      return;
    }

    if (this.dateSortDirection === 1) {
      this.viewsSortDirection = false;
      this.dateSortDirection = 0;
      return;
    }

    if (this.dateSortDirection === 0) {
      this.dateSortDirection = 1;
      this.viewsSortDirection = false;
      return;
    }
  }

  setSortByViews() {
    if (this.viewsSortDirection === false) {
      this.viewsSortDirection = 1;
      this.dateSortDirection = false;
      return;
    }

    if (this.viewsSortDirection === 1) {
      this.viewsSortDirection = 0;
      this.dateSortDirection = false;
      return;
    }

    if (this.viewsSortDirection === 0) {
      this.viewsSortDirection = 1;
      this.dateSortDirection = false;
      return;
    }
  }

  toggleFilter() {
    this.isDisplayFilter = !this.isDisplayFilter;
  }

  setSortByQuery(query: string) {
    this.searchQuery = query;
  }
}
