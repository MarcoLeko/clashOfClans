import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ClansByClantagType, PlayerByMemberListType, PlayerByPlayerTagType} from '../../../../../../generated/types';
import {Router} from '@angular/router';
import {AgGridNg2} from 'ag-grid-angular';
import {TrophiesHomeCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {TrophiesNightCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {RoleCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/role-cell-renderer-component';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent implements OnChanges {

  @ViewChild('childModal') childModal: ModalDirective;
  @ViewChild('agGrid') agGrid: AgGridNg2;

  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  public frameworkComponents = {
    roleCellRendererComponent: RoleCellRendererComponent
  };
  public rowData: PlayerByMemberListType[];
  public columnDefs = [
    {headerName: 'Tag', field: 'tag', width: 120},
    {headerName: 'Name', field: 'name', width: 170},
    {headerName: 'Role', field: 'role', width: 100, cellRenderer: 'roleCellRendererComponent'},
    {headerName: 'Level', field: 'expLevel', width: 90},
    {headerName: 'Home', field: 'trophies', width: 110, headerComponentFramework: TrophiesHomeCellRendererComponent},
    {headerName: 'Night', field: 'versusTrophies', width: 110, headerComponentFramework: TrophiesNightCellRendererComponent
    }
  ];

  constructor(private router: Router) {
  }

  ngOnChanges(): void {
    if (this.clanInfo) {
      this.rowData = this.clanInfo.memberList;
    }
  }

  open() {
    this.childModal.show();
  }

  memberSearch() {
    const memberId: number = this.agGrid.api.getSelectedRows()[0].tag;
    this.childModal.hide();
    this.router.navigate(['playerSearch/' + memberId]);
  }

}
