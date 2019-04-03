import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { SearchService } from '../search.service';
import { Result } from 'src/result';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.css']
})
export class SearchMainComponent implements OnInit {
  searchResult: Result[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  handleSubmittedSearchQuery(search: Search) {
    this.searchService.getResults(search.searchQuery).subscribe(
      res => {
          this.searchResult = JSON.parse(JSON.stringify(res))['hits'];
      },
      err => {
        console.log('error:' + err);
      }
    );
  }
}
