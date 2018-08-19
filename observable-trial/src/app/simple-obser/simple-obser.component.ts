import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-simple-obser',
  templateUrl: './simple-obser.component.html',
  styleUrls: ['./simple-obser.component.css']
})
export class SimpleObserComponent implements OnInit, OnDestroy {

  mySubs: Subscription;

  constructor() { }

  ngOnInit() {
    // interval(1000).pipe(
    //   map((x) => {
    //     console.log(x);
    //   })
    // );

    ngOnDestroy() {
      this.mySubs.unsubscribe();
    }

    // An Observable with observer parameter
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        // This never happens as the observer is complete before this step..
        observer.next('third package');
      }, 6000);
    });

    /**
     * Subsribes to the above Observerable.
     */
    this.mySubs = myObservable.subscribe(
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
