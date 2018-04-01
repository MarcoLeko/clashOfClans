import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsHeaderComponent} from './player-search-stats-header.component';
import {Mocks} from '../../../../testing/mocks';
import {TownhallPictureService} from '../../../../shared/services/townhall-picture/townhall-picture.service';
import {TownhallImgSrc} from '../../../../shared/services/townhall-picture/townhall-src';
import {HeroMapperService} from '../../../services/hero-mapper/hero-mapper.service';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

describe('PlayerSearchStatsHeaderComponent', () => {
  let component: PlayerSearchStatsHeaderComponent;
  let fixture: ComponentFixture<PlayerSearchStatsHeaderComponent>;

  const townhallSpy = {
    getTownHallPicture: jasmine.createSpy('getTownHallPicture')
  };
  const heroMapperSpy = {
    mapHeroList: jasmine.createSpy('mapHeroList')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule
      ],
      providers: [
        {provide: TownhallPictureService, useValue: townhallSpy},
        {provide: HeroMapperService, useValue: heroMapperSpy},
      ],
      declarations: [PlayerSearchStatsHeaderComponent]
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

  it('should set image on init', () => {
    townhallSpy.getTownHallPicture.and.returnValue(TownhallImgSrc.TOWNHALL_NINE);

    component.ngOnChanges();

    expect(component.imgSrcForTownhall).toEqual(TownhallImgSrc.TOWNHALL_NINE);
  });

  it('should set hero array on init', () => {
    heroMapperSpy.mapHeroList.and.returnValue(Mocks.DISPLAYHEROOBJ);

    component.ngOnChanges();

    expect(component.heroes).toEqual(Mocks.DISPLAYHEROOBJ);
  });
});
