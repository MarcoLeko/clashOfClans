import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';

@Component({
  selector: 'app-search-result-body',
  templateUrl: './search-result-body.component.html',
  styleUrls: ['./search-result-body.component.css']
})
export class SearchResultBodyComponent implements OnInit {

  @Input() searchResult: PlayerByPlayerTagType | ClansByClantagType;
  public isPlayer: boolean;
  constructor() { }

  public ngOnInit():void {
    this.isPlayer = this.isPlayerTagType(this.searchResult);
    console.log(this.searchResult);
    console.log(this.isPlayerTagType(this.searchResult));
  }

  public goToDetailedStats(): void {
  }

  public isPlayerTagType(object: PlayerByPlayerTagType | ClansByClantagType): boolean {
    return 'warStars' in object;
  }
}
