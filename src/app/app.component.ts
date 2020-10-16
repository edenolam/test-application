import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, of, Subscription} from 'rxjs';
import {AppareilService} from './service/appareil.service';
import {PostService} from './service/post.service';
import {Appareil} from './model/appareil';
import {Post} from './model/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription: Subscription;

  constructor( private postService: PostService) {
  }


  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

