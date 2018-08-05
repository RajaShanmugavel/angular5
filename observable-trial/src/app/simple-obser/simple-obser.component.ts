import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-obser',
  templateUrl: './simple-obser.component.html',
  styleUrls: ['./simple-obser.component.css']
})
export class SimpleObserComponent implements OnInit {

  constructor() { }

  /**
   * This needs to be amended, as pipe command has been upated in Angular 6
   */
  ngOnInit() {
    interval(1000).pipe(
      map((x) => {
        console.log(x);
      })
    );
  }

}