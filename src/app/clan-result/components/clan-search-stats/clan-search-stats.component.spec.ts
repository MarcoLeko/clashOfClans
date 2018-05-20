import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsComponent} from './clan-search-stats.component';

describe('ClanSearchStatsComponent', () => {
  let component: ClanSearchStatsComponent;
  let fixture: ComponentFixture<ClanSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClanSearchStatsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
