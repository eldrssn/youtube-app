import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}

  @Output() toggleFilterClick = new EventEmitter<void>();
  toggleClick() {
    this.toggleFilterClick.emit();
  }

  @Output() displayResultBlockClick = new EventEmitter<void>();
  displayResultBlock() {
    this.displayResultBlockClick.emit();
  }
}
