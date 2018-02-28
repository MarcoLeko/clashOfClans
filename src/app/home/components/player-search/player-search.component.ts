import {Component} from '@angular/core';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent {

  onSubmit(event) {
    console.log(event);
  }
}
