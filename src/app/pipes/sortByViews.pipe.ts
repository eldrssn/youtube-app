import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../types/search-item';

@Pipe({ name: 'sortByViews' })
export class SortByViewsPipe implements PipeTransform {
  transform(cards: SearchItem[], direction: false | 0 | 1): SearchItem[] {
    if (direction === false) {
      return cards;
    }

    return cards.slice().sort((item, nextItem) => {
      return direction
        ? Number(nextItem.statistics.viewCount) -
            Number(item.statistics.viewCount)
        : Number(item.statistics.viewCount) -
            Number(nextItem.statistics.viewCount);
    });
  }
}
