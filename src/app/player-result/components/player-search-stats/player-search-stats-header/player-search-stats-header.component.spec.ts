import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsHeaderComponent} from './player-search-stats-header.component';
import {Mocks} from '../../../../testing/mocks';
import {TownhallPictureService} from '../../../../shared/services/townhall-picture/townhall-picture.service';
import {TownhallImgSrc} from '../../../../shared/services/townhall-picture/townhall-src';

describe('PlayerSearchStatsHeaderComponent', () => {
  let component: PlayerSearchStatsHeaderComponent;
  let fixture: ComponentFixture<PlayerSearchStatsHeaderComponent>;

  const townhallSpy = {
    getTownHallPicture: jasmine.createSpy('getTownHallPicture')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: TownhallPictureService, useValue: townhallSpy}],
      declarations: [ PlayerSearchStatsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsHeaderComponent);
    component = fixture.componentInstance;
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set images on init', () => {
    townhallSpy.getTownHallPicture.and.returnValue(TownhallImgSrc.TOWNHALL_NINE);

    fixture.detectChanges();

    expect(component.imgSrcForClanBadge).toEqual(Mocks.PLAYERSTATSBYPLAYERTAG.clan.badgeUrls.medium);
    expect(component.imgSrcForLeagueBadge).toEqual(Mocks.PLAYERSTATSBYPLAYERTAG.league.iconUrls.medium);
    expect(component.imgSrcForTownhall).toEqual(TownhallImgSrc.TOWNHALL_NINE);
  });
});
