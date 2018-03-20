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

  it('should show modal with open', () => {
    const spy = spyOn(component.childModal, 'show').and.stub();
    component.open();
    expect(spy).toHaveBeenCalled();
  });

  it('should set achievement with first value of array', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    builderInfoSpy.getBuilderInfoType.and.returnValue(Mocks.BUILDERINFOMOCK);
    component.ngOnInit();

    expect(component.achievement).toEqual(component.playerResult.achievements[0]);
  });

  it('should call builder info service', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    const spy = builderInfoSpy.getBuilderInfoType.and.returnValue(Mocks.BUILDERINFOMOCK);
    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(component.achievement.village);
  });

  it('should calculate prozentual portion', () => {
    const value:number = 25;
    const target:number = 40;
    const result: number = 62.5;

    expect(component.calculateProgress(value, target)).toBe(result);
  });

  it('should return bootstrap active class', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    builderInfoSpy.getBuilderInfoType.and.returnValue(Mocks.BUILDERINFOMOCK);
    component.ngOnInit();

    const result = 'active';

    expect(component.setActiveState(component.achievement.name)).toEqual(result)
  });
});
