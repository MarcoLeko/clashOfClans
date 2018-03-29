import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {pulse} from '../../animations/pulse.animation';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
  animations: [
    pulse
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
