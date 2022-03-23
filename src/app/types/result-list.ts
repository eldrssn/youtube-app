import { SearchItem } from './search-item';

export interface ResultList {
  king: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<SearchItem>;
}
