import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsBodyComponent} from './clan-search-stats-body.component';

describe('ClanSearchStatsBodyComponent', () => {
  let component: ClanSearchStatsBodyComponent;
  let fixture: ComponentFixture<ClanSearchStatsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSearchStatsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
