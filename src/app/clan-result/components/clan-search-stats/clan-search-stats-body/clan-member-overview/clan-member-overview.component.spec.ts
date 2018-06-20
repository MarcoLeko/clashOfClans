import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanMemberOverviewComponent} from './clan-member-overview.component';
import {AgGridModule} from 'ag-grid-angular';
import {Router} from '@angular/router';
import {CompleteClanMemberStatsService} from '../../../../services/complete-clan-member-stats/complete-clan-member-stats.service';

describe('ClanMemberOverviewComponent', () => {
  let component: ClanMemberOverviewComponent;
  let fixture: ComponentFixture<ClanMemberOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([])
      ],
      providers: [
        {provide: Router},
        {provide: CompleteClanMemberStatsService}
      ],
      declarations: [ ClanMemberOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanMemberOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
