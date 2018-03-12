import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-search-result',
  templateUrl: './error-search-result.component.html',
  styleUrls: ['./error-search-result.component.css']
})
export class ErrorSearchResultComponent {

  public imgSrc = 'assets/clash-error.png';
  constructor(private router: Router) {
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

}
