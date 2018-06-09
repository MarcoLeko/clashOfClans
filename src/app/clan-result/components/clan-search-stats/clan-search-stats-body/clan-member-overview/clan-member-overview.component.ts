import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CompleteClanMemberStatsService} from '../../../../services/complete-clan-member-stats/complete-clan-member-stats.service';
import {ClansByClantagType} from '../../../../../../generated/types';
import {TrophiesNightCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {TrophiesHomeCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {CompleteClanMemberStatsType} from '../../../../services/complete-clan-member-stats/complete-clan-member-stats.types';
import {LeagueBadgeCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/league-badge-cell-renderer.component';
import {RoleCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/role-cell-renderer-component';
import {TownhallPictureCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/townhall-picture-cell-renderer.component';
import {WarStarsCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/war-stars-cell-renderer.component';
import {AgGridNg2} from 'ag-grid-angular';
import {Router} from '@angular/router';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-clan-member-overview',
  templateUrl: './clan-member-overview.component.html',
  styleUrls: ['./clan-member-overview.component.css']
})
export class ClanMemberOverviewComponent implements OnInit {

  @Input() clanResult: ClansByClantagType;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  public gridOptions: GridOptions = <GridOptions> {
    rowHeight: 40
  };
  public playerStats: CompleteClanMemberStatsType[];
  public frameworkComponents = {
    leagueBadgeCellRendererComponent: LeagueBadgeCellRendererComponent,
    roleCellRendererComponent: RoleCellRendererComponent,
    townhallPictureCellRendererComponent: TownhallPictureCellRendererComponent,
    warStarsCellRendererComponent: WarStarsCellRendererComponent
  };
  public columnDefs = [
    {headerName: 'Tag', field: 'tag', width: 120},
    {headerName: 'Name', field: 'name', width: 170},
    {headerName: 'War Stars', field: 'warStars', width: 130, cellRenderer: 'warStarsCellRendererComponent'},
    {headerName: 'Townhall', field: 'townhall', width: 120, cellRenderer: 'townhallPictureCellRendererComponent'},
    {headerName: 'Level', field: 'level', width: 100},
    {headerName: 'Role', field: 'role', width: 120, cellRenderer: 'roleCellRendererComponent'},
    {headerName: 'League', field: 'league.iconUrls.tiny', width: 100, cellRenderer: 'leagueBadgeCellRendererComponent'},
    {
      headerName: 'Trophies',
      field: 'trophies',
      width: 120,
      headerComponentFramework: TrophiesHomeCellRendererComponent
    },
    {
      headerName: 'Night',
      field: 'trophiesNightBase',
      width: 120,
      headerComponentFramework: TrophiesNightCellRendererComponent
    }
  ];

  constructor(private router: Router,
              private completeClanMemberStatsService: CompleteClanMemberStatsService) {
  }

  ngOnInit() {
    this.completeClanMemberStatsService.getStats(this.clanResult.tag).subscribe((result: CompleteClanMemberStatsType[]) => {
      this.playerStats = result;
    });
  }

  memberSearch() {
    const memberId: number = this.agGrid.api.getSelectedRows()[0].tag;
    this.router.navigate(['playerSearch/' + memberId]);
  }

}
