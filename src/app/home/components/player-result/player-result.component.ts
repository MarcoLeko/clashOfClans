import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlayerSearchService} from "../../services/player-search/player-search.service";
import {PlayerByPlayerTagType} from "../../../../generated/types";

@Component({
  selector: 'app-playerResult',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css']
})
export class PlayerResultComponent implements OnInit {

  public isLoading: boolean = true;
  public searchValue: boolean;
  public playerResult: PlayerByPlayerTagType;

  constructor(private playerSearchService: PlayerSearchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['playerId'];
    });

    this.playerSearchService.getPlayer(this.searchValue).subscribe(player => {
        this.playerResult = player;
        console.log(this.playerResult);
      }, () => this.isLoading = false,
      () => this.isLoading = false);
  }
}
