import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsModalComponent} from './troops-and-spells-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {TroopsHomeAttackStatsService} from '../../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';

describe('TroopsAndSpellsModalComponent', () => {
  let component: TroopsAndSpellsModalComponent;
  let fixture: ComponentFixture<TroopsAndSpellsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      providers: [
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
