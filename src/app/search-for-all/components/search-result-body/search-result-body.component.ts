import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-search-result-body',
  templateUrl: './search-result-body.component.html',
  styleUrls: ['./search-result-body.component.css']
})
export class SearchResultBodyComponent implements OnInit {

  @Input() searchResult: PlayerByPlayerTagType | ClansByClantagType;
  public isPlayer: boolean;

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyHomeImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) { }

  public ngOnInit():void {
    this.isPlayer = this.isPlayerTagType(this.searchResult);
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
  }

  public goToDetailedStats(): void {
  }

  private isPlayerTagType(object: PlayerByPlayerTagType | ClansByClantagType): boolean {
    return 'warStars' in object;
  }
}
