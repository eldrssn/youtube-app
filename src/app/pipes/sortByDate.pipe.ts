import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../types/search-item';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  transform(cards: SearchItem[], direction: false | 0 | 1): SearchItem[] {
    if (direction === false) {
      return cards;
    }

    return cards.slice().sort((item, nextItem) => {
      return direction === 1
        ? Number(new Date(item.snippet.publishedAt)) -
            Number(new Date(nextItem.snippet.publishedAt))
        : Number(new Date(nextItem.snippet.publishedAt)) -
            Number(new Date(item.snippet.publishedAt));
    });
  }
}
