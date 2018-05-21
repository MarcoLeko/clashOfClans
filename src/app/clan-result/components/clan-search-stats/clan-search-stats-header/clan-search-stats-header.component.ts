import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../generated/types';

@Component({
  selector: 'app-clan-search-stats-header',
  templateUrl: './clan-search-stats-header.component.html',
  styleUrls: ['./clan-search-stats-header.component.css']
})
export class ClanSearchStatsHeaderComponent implements OnInit {

  @Input()clanResult: ClansByClantagType;
  constructor() { }

  ngOnInit() {
  }

}
