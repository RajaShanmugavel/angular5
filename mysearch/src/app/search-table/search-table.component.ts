import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/result';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  @Input()
  searchList: Result[];

  constructor() { }

  ngOnInit() {
  }

}
