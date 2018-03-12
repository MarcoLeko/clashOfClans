import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.3)'
      })),

      transition('small <=> large', animate('235ms ease-in')),
    ]),
  ]
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  public imgSource = 'assets/ClashLogo.png';

  public state = 'small';
  public subscriber;

  ngOnInit() {
    this.subscriber = Observable.interval(300).subscribe(() => {
      this.state = (this.state === 'small' ? 'large' : 'small');
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
