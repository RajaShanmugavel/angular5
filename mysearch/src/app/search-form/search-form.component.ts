import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Search } from '../search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  @Output()
  submittedSearchQuery = new EventEmitter<Search>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      searchQuery: null
    });
  }

  onSubmit() {
    const val = this.searchForm.value;
    console.log('search query submitted:' + val);
    this.submittedSearchQuery.emit(val);
  }

}
