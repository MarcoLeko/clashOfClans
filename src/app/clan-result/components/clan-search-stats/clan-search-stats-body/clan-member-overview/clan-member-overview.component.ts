import {Component, Input, OnInit} from '@angular/core';
import {CompleteClanMemberStatsService} from '../../../../services/complete-clan-member-stats/complete-clan-member-stats.service';
import {ClansByClantagType} from '../../../../../../generated/types';
import {TrophiesNightCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {TrophiesHomeCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {CompleteClanMemberStatsType} from '../../../../services/complete-clan-member-stats/complete-clan-member-stats.types';

@Component({
  selector: 'app-clan-member-overview',
  templateUrl: './clan-member-overview.component.html',
  styleUrls: ['./clan-member-overview.component.css']
})
export class ClanMemberOverviewComponent implements OnInit {

  @Input() clanResult: ClansByClantagType;
  playerStats: CompleteClanMemberStatsType[];

  public columnDefs = [
    {headerName: 'Tag', field: 'tag', width: 120},
    {headerName: 'Name', field: 'name', width: 170},
    {headerName: 'War Stars', field: 'warStars', width: 150},
    {headerName: 'Townhall', field: 'townhall', width: 150},
    {headerName: 'Level', field: 'level', width: 120},
    {headerName: 'Role', field: 'role', width: 150},
    {headerName: 'League', field: 'league', width: 150},
    {headerName: 'Trophies', field: 'trophies', width: 150, headerComponentFramework: TrophiesHomeCellRendererComponent},
    {headerName: 'Night', field: 'versusTrophies', width: 150, headerComponentFramework: TrophiesNightCellRendererComponent
    }
  ];
  constructor(private completeClanMemberStatsService:CompleteClanMemberStatsService) { }

  ngOnInit() {
    this.completeClanMemberStatsService.getStats(this.clanResult.tag).subscribe((result: CompleteClanMemberStatsType[]) => {
      console.log(result);
      this.playerStats = result;
    });
  }

  memberSearch(){}
}
