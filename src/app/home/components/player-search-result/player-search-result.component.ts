import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlayerSearchService} from "../../services/player-search/player-search.service";
import {PlayerByPlayerTagType} from "../../../../generated/types";

@Component({
  selector: 'app-player-result',
  templateUrl: './player-search-result.component.html',
  styleUrls: ['./player-search-result.component.css']
})
export class PlayerSearchResultComponent implements OnInit {

  public isLoading: boolean = true;
  public searchValue: boolean;
  public playerResult: PlayerByPlayerTagType;
  public hasNoResultFound: boolean = false;

  constructor(private playerSearchService: PlayerSearchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['playerId'];
    });

    this.playerSearchService.getPlayer(this.searchValue).subscribe(player => {
        this.playerResult = player;
        console.log(this.playerResult);
      }, () => {
        this.hasNoResultFound = true;
        this.isLoading = false
      },
      () => this.isLoading = false);
  }
}
