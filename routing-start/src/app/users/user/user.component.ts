import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // This method runs first for the provided id and name parameters
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // The below uses Subscribe <Observable> meaning the below code runs only when the values of parameters id & name changes..
    this.paramsSubscription = this.route.params
      .subscribe(params => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }

  // Not required to do this here.. But doesn't hurt..
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
