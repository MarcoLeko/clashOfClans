import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  @ViewChild('form') form: HTMLFormElement;

  constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  searchForAll(form) {
    this.router.navigate(['searchAll/' + form.searchValue]);
    this.form.form.reset();
  }
}
