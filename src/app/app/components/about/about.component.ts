import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public autorUrl: Observable<string | null>;
  public ref = this.storage.ref('images/finales-bewerbungsfoto.JPG');

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.autorUrl = url);
  }

}
