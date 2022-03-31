import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../types/search-item';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  constructor() {}

  @Input() card!: SearchItem;

  ngOnInit(): void {}
}
