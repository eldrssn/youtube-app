import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../types/search-item';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  constructor() {}

  @Input() card!: SearchItem;

  checkPublishing(date: string) {
    const DAYS = 7;
    const MONTH = 1;
    const HALFYEAR = 0.5;

    const currentDate = new Date();
    const cardDate = new Date(date);

    if (cardDate.getDate() < currentDate.getDate() - DAYS) {
      return 'blue';
    }

    if (cardDate.getMonth() < currentDate.getMonth() - MONTH) {
      return 'green';
    }

    if (cardDate.getFullYear() < currentDate.getFullYear() - HALFYEAR) {
      return 'red';
    }

    return 'black';
  }
}
