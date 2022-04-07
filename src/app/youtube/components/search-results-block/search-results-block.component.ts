import { Component, Input } from '@angular/core';
import { SearchItem } from '../../../types/search-item';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent {
  constructor() {}

  @Input() searchQuery: string;
  @Input() cards: SearchItem[];
  @Input() dateSortDirection: false | 0 | 1;
  @Input() viewsSortDirection: false | 0 | 1;
}
