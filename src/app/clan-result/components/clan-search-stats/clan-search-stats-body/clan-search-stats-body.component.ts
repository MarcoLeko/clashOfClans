import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../generated/types';

@Component({
  selector: 'app-clan-search-stats-body',
  templateUrl: './clan-search-stats-body.component.html',
  styleUrls: ['./clan-search-stats-body.component.css']
})
export class ClanSearchStatsBodyComponent implements OnInit {

  @Input()clanResult: ClansByClantagType;
  constructor() { }

  ngOnInit() {
  }

}
