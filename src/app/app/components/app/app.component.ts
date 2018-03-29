import {Component} from '@angular/core';
import {routing} from '../../animations/routing.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    routing
  ]
})
export class AppComponent {

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
