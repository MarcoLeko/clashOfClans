import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrentSeasonModalComponent} from './current-season-modal.component';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {Mocks} from '../../../../../testing/mocks';
import {FirebaseMock} from '../../../../../testing/firebase-mock';
import {AngularFireStorage} from 'angularfire2/storage';

describe('CurrentSeasonModalComponent', () => {
  let component: CurrentSeasonModalComponent;
  let fixture: ComponentFixture<CurrentSeasonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        AccordionModule.forRoot(),
        Angular2FontawesomeModule
      ],
      providers:[{provide: AngularFireStorage, useClass: FirebaseMock}],
      declarations: [CurrentSeasonModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSeasonModalComponent);
    component = fixture.componentInstance;
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal on click', () => {
    const modal: any = {
      show: function () {
      },
      config: {backdrop: 'static'}
    };

    const spy = spyOn(modal, 'show').and.stub();
    component.modal = modal;

    component.open();
    expect(spy).toHaveBeenCalled();
  });

  it('should call donationsComparison on change', () => {
    const spy = spyOn(component, 'donationsComparison').and.stub();
    component.ngOnChanges();

    expect(spy).toHaveBeenCalledWith(component.playerResult);
  });

  it('should fill donations values', () => {
    component.donationsComparison(component.playerResult);

    const expectedMaxDonationsValue = component.playerResult.donations + component.playerResult.donationsReceived;
    expect(component.donations).toBeDefined();
    expect(component.donations[0].value).toBe(component.playerResult.donations);
    expect(component.maxProgressBarValue).toBe(expectedMaxDonationsValue);
  });

  it('should fill default donations values', () => {
    const playerWithNoDonationStats: any = {
      donations: 0,
      donationsReceived: 0
    };
    component.playerResult = playerWithNoDonationStats;
    component.donationsComparison(component.playerResult);

    expect(component.donations).toBeDefined();
    expect(component.donations[0].value).toBe(1);
    expect(component.maxProgressBarValue).toBe(2);
  });

  it('should return false with legend league experience but 0 legend trophies', () => {
    expect(component.hasLegendLeagueExperienced()).toBe(false);
  });
});
