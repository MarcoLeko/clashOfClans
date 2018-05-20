import {Component, OnInit} from '@angular/core';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType} from '../../../../generated/types';

@Component({
  selector: 'app-clan-search-result',
  templateUrl: './clan-search-result.component.html',
  styleUrls: ['./clan-search-result.component.css']
})
export class ClanSearchResultComponent implements OnInit {

  public isLoading = true;
  public searchValue: string;
  public hasNoResultFound = false;
  public clanResult: ClansByClantagType;

  constructor(private clanSearchService: ClanSearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['clanId'];
      this.loadClanData();
    });
  }

  loadClanData(): void {
    this.clanSearchService.getClanByClanTag(this.searchValue)
      .subscribe((clan: ClansByClantagType) => {
          this.clanResult = clan;
      },
        () => {
          this.hasNoResultFound = true;
          this.isLoading = false;
        }, () => this.isLoading = false);
  }
}
