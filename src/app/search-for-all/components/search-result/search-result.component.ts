import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public searchValue: string;
  public searchResult: PlayerByPlayerTagType | ClansByClantagType | ClansByClantagType[];
  public hasNoResultFound: boolean;
  public isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.searchValue = params['searchValue'];
      });
  }
}
