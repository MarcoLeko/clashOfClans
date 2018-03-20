import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AchievementModalComponent} from './achievement-modal.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../../services/builder-info/builder-info.service';
import {Mocks} from '../../../../../../testing/mocks';

describe('AchievementModalComponent', () => {
  let component: AchievementModalComponent;
  let fixture: ComponentFixture<AchievementModalComponent>;

  const builderInfoSpy = {
    getBuilderInfoType: jasmine.createSpy('getBuilderInfoType')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
      ],
      providers: [{provide: BuilderInfoService, useValue: builderInfoSpy}],
      declarations: [AchievementModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    expect(component).toBeTruthy();
  });
});
