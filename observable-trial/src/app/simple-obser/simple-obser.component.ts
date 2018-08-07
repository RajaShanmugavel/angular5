import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-obser',
  templateUrl: './simple-obser.component.html',
  styleUrls: ['./simple-obser.component.css']
})
export class SimpleObserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // interval(1000).pipe(
    //   map((x) => {
    //     console.log(x);
    //   })
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('this is not going to work!')
      }, 5000);
    });

    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );

  }

}
