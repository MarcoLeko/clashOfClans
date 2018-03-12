import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerByPlayerTagType } from '../../../../generated/types';
import { PlayerSearchService } from '../../services/player-search/player-search.service';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-search-result.component.html',
  styleUrls: ['./player-search-result.component.css']
})
export class PlayerSearchResultComponent implements OnInit, AfterViewInit {

  public isLoading = true;
  public searchValue: boolean;
  public playerResult: PlayerByPlayerTagType;
  public hasNoResultFound = false;

  constructor(private playerSearchService: PlayerSearchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['playerId'];
    });
  }

  ngAfterViewInit() {
    this.playerSearchService.getPlayer(this.searchValue).subscribe(player => {
        this.playerResult = player;
      }, () => {
        this.hasNoResultFound = true;
        this.isLoading = false;
      },
      () => this.isLoading = false);
  }
}
