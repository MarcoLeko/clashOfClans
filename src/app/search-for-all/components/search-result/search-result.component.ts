import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {PlayerOrClanResultService} from '../../services/player-or-clan-result/player-or-clan-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public searchValue: string;
  public searchResult: PlayerByPlayerTagType[] | ClansByClantagType[] = [];
  public hasNoResultFound: boolean = false;
  public isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private playerOrClanResultService: PlayerOrClanResultService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.searchValue = params['searchValue'];
        this.playerOrClanResultService.getPlayerOrClanStats(this.searchValue).subscribe(data => {
          if (data.length === 0) {
            this.hasNoResultFound = true;
          }
          this.searchResult = data;
          this.isLoading = false;
        })
      });
  }
}
