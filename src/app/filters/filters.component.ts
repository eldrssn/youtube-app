import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  constructor() {}

  query: string = '';

  @Input() isDisplayFilter: boolean;

  @Output() setSortByDateClick = new EventEmitter<void>();
  setSortByDate() {
    this.setSortByDateClick.emit();
  }

  @Output() setSortByViewsClick = new EventEmitter<void>();
  setSortByViews() {
    this.setSortByViewsClick.emit();
  }

  @Output() setSortByQueryInput = new EventEmitter<string>();
  setSortByQuery(query: string) {
    this.setSortByQueryInput.emit(query);
  }
}
