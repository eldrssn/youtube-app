import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByQueryPipe } from './pipes/sortByQuery.pipe';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FiltersComponent,
    SortByDatePipe,
    SortByViewsPipe,
    SortByQueryPipe,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class YoutubeModule {}
