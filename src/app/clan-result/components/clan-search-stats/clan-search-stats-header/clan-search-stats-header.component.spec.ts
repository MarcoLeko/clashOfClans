import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsHeaderComponent} from './clan-search-stats-header.component';

describe('ClanSearchStatsHeaderComponent', () => {
  let component: ClanSearchStatsHeaderComponent;
  let fixture: ComponentFixture<ClanSearchStatsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSearchStatsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
