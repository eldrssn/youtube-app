import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FiltersComponent } from './header/filters/filters.component';
import { CustomButtonComponent } from './ui/custom-button/custom-button.component';
import { SearchItemIconsComponent } from './ui/search-item-icons/search-item-icons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchResultComponent, SearchItemComponent, FiltersComponent, CustomButtonComponent, SearchItemIconsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
