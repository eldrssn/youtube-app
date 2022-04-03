import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SortByViewsPipe } from './pipes/sortByViews.pipe';
import { SortByQueryPipe } from './pipes/sortByQuery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    SortByDatePipe,
    SortByViewsPipe,
    SortByQueryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
