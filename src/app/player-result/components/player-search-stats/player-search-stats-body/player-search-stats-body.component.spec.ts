import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchStatsBodyComponent } from './player-search-stats-body.component';
import { Mocks } from '../../../../testing/mocks';
import { By } from '@angular/platform-browser';
import { ClanSearchService } from '../../../../shared/services/clan-search/clan-search.service';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../../../../shared/shared.module';

describe('PlayerSerchStatsBodyComponent', () => {
  let component: PlayerSearchStatsBodyComponent;
  let fixture: ComponentFixture<PlayerSearchStatsBodyComponent>;

  const clanSearchSpy = {
    getClanByClanTag: jasmine.createSpy('getClanByClanTag')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        {provide: ClanSearchService, useValue: clanSearchSpy}
      ],
      declarations: [
        PlayerSearchStatsBodyComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('p'));

    const expectedTextByFirstParagraph = 'Have a look about war stars, best trophies, best trophies in versus battles, ' +
      'legend league statistics';
    const nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent).toMatch(expectedTextByFirstParagraph);
  });

  it('should call clanSearch mock on init', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    const calledSpy = clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));
    fixture.detectChanges();

    expect(calledSpy).toHaveBeenCalledWith(component.playerResult.clan.tag);
    expect(component.clanInfo).toEqual(Mocks.CLANSTATSBYCLANTAG);
  });
});
