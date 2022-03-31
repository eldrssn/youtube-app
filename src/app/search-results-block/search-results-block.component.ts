import { Component, Input, OnInit } from '@angular/core';
import { data } from './mokedData';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],
})
export class SearchResultsBlockComponent implements OnInit {
  constructor() {}

  cards = data.items;

  ngOnInit(): void {
    console.log(this.cards);
  }
}
