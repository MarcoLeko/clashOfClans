import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent {

  constructor(private router: Router) {
  }

  onSubmit(value) {
    this.router.navigate(['search/' + value.playerId])
}

}
