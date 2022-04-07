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
}
