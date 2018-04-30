import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsModalComponent} from './troops-and-spells-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {TroopsHomeAttackStatsService} from '../../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {TroopsHomeAttackStatsDisplayService} from '../../../../services/troops-and-spells-mapper/home/home-troops-display/troops-home-attack-stats-display.service';
import {SpellsHomeStatsDisplayService} from '../../../../services/troops-and-spells-mapper/home/home-spells-display/spells-home-stats-display.service';
import {TroopsNightAttackStatsDisplayService} from '../../../../services/troops-and-spells-mapper/night/night-troops-display/troops-night-attack-stats-display.service';
import {AgGridModule} from 'ag-grid-angular';

describe('TroopsAndSpellsModalComponent', () => {
  let component: TroopsAndSpellsModalComponent;
  let fixture: ComponentFixture<TroopsAndSpellsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        AgGridModule.withComponents([])
      ],
      providers: [
        {provide: TroopsHomeAttackStatsDisplayService},
        {provide: TroopsNightAttackStatsDisplayService},
        {provide: SpellsHomeStatsDisplayService},
        {provide: TroopsHomeAttackStatsService},
        {provide: BuilderInfoService}],
      declarations: [ TroopsAndSpellsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsAndSpellsModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
