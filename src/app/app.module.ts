import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { CustomButtonComponent } from './ui/custom-button/custom-button.component';
import { SearchItemIconsComponent } from './ui/search-item-icons/search-item-icons.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    CustomButtonComponent,
    SearchItemIconsComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
