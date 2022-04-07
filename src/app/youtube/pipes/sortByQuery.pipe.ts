import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../types/search-item';

@Pipe({ name: 'sortByQuery' })
export class SortByQueryPipe implements PipeTransform {
  transform(cards: SearchItem[], query: string): SearchItem[] {
    return cards.filter((item) =>
      item.snippet.title.toLowerCase().includes(query)
    );
  }
}
