import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsComponent} from './troops-and-spells.component';
import {TroopsNightResolverService} from '../../../../services/troops-and-spells/troops-night/troops-night-resolver.service';
import {TroopsHomeResolverService} from '../../../../services/troops-and-spells/troops-home/troops-home-resolver.service';
import {SpellsHomeResolverService} from '../../../../services/troops-and-spells/spells-home/spells-home-resolver.service';
import {SiegeMachinesResolverService} from '../../../../services/troops-and-spells/siege-machines/siege-machines-resolver.service';

describe('TroopsAndSpellsComponent', () => {
  let component: TroopsAndSpellsComponent;
  let fixture: ComponentFixture<TroopsAndSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: TroopsNightResolverService},
        {provide: TroopsHomeResolverService},
        {provide: SpellsHomeResolverService},
        {provide: SiegeMachinesResolverService}
      ],
      declarations: [TroopsAndSpellsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsAndSpellsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
