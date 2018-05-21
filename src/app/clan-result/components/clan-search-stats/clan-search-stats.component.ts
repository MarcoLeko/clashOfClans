import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../generated/types';

@Component({
  selector: 'app-clan-search-stats',
  templateUrl: './clan-search-stats.component.html',
  styleUrls: ['./clan-search-stats.component.css']
})
export class ClanSearchStatsComponent implements OnInit {

  @Input()clanResult: ClansByClantagType;
  constructor() {
  }

  ngOnInit() {
  }

}
