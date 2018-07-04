import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {ClansByClantagType, PlayerByMemberListType, PlayerByPlayerTagType} from '../../../../../../generated/types';
import {Router} from '@angular/router';
import {AgGridNg2} from 'ag-grid-angular';
import {TrophiesHomeCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {TrophiesNightCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {RoleCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/role-cell-renderer-component';

@Component({
  selector: 'app-clan-stats',
  templateUrl: './clan-stats.component.html',
  styleUrls: ['./clan-stats.component.css']
})
export class ClanStatsComponent implements OnChanges {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  public frameworkComponents = {
    roleCellRendererComponent: RoleCellRendererComponent
  };
  public rowData: PlayerByMemberListType[];
  public columnDefs = [
    {headerName: 'Tag', field: 'tag', width: 110},
    {headerName: 'Name', field: 'name', width: 130},
    {headerName: 'Role', field: 'role', width: 100, cellRenderer: 'roleCellRendererComponent'},
    {headerName: 'Level', field: 'expLevel', width: 80},
    {headerName: 'Home', field: 'trophies', width: 100, headerComponentFramework: TrophiesHomeCellRendererComponent},
    {headerName: 'Night', field: 'versusTrophies', width: 100, headerComponentFramework: TrophiesNightCellRendererComponent
    }
  ];

  constructor(private router: Router) {
  }

  ngOnChanges(): void {
    if (this.clanInfo) {
      this.rowData = this.clanInfo.memberList;
    }
  }

  memberSearch() {
    const memberId: number = this.agGrid.api.getSelectedRows()[0].tag;
    this.router.navigate(['playerSearch/' + memberId]);
  }

  public clanSearch() {
    this.router.navigate(['clanSearch/' + this.playerResult.clan.tag]);
  }
}
