import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  REST_URL = 'http://hn.algolia.com/api/v1/search_by_date?query=';

  constructor(private httpClient: HttpClient) {}

  getResults(query: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.REST_URL + query);
  }
}
