import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsHeaderComponent} from './player-search-stats-header.component';
import {Mocks} from '../../../../testing/mocks';
import {TownhallHomePictureService} from '../../../../shared/services/townhall-picture/home/townhall-home-picture.service';
import {TownhallHomeImgSrc} from '../../../../shared/services/townhall-picture/home/townhall-home-img-src';
import {HeroMapperService} from '../../../services/hero-mapper/hero-mapper.service';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';

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
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        {provide: TownhallHomePictureService, useValue: townhallSpy},
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
    townhallSpy.getTownHallPicture.and.returnValue(Observable.of(TownhallHomeImgSrc.TOWNHALL_NINE));
    heroMapperSpy.mapHeroList.and.returnValue(Observable.of(Mocks.DISPLAYHEROOBJ));

    component.ngOnChanges();

    expect(component.imgSrcForTownhallHome).toEqual(TownhallHomeImgSrc.TOWNHALL_NINE);
  });

  it('should set hero array on init', () => {
    townhallSpy.getTownHallPicture.and.returnValue(Observable.of(TownhallHomeImgSrc.TOWNHALL_NINE));
    heroMapperSpy.mapHeroList.and.returnValue(Observable.of(Mocks.DISPLAYHEROOBJ));

    component.ngOnChanges();

    expect(component.heroes).toEqual(Mocks.DISPLAYHEROOBJ);
  });
});
