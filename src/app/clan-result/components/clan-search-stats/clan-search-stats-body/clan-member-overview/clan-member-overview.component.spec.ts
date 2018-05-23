import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanMemberOverviewComponent} from './clan-member-overview.component';

describe('ClanMemberOverviewComponent', () => {
  let component: ClanMemberOverviewComponent;
  let fixture: ComponentFixture<ClanMemberOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanMemberOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanMemberOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
