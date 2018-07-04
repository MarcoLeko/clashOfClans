import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AchievementComponent} from './achievement.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {Mocks} from '../../../../../testing/mocks';
import {FirebaseStorageMock} from '../../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';

describe('AchievementComponent', () => {
  let component: AchievementComponent;
  let fixture: ComponentFixture<AchievementComponent>;

  const builderInfoSpy = {
    getBuilderInfoType: jasmine.createSpy('getBuilderInfoType')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
      ],
      providers: [
        {provide: BuilderInfoService, useValue: builderInfoSpy},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock}
      ],
      declarations: [AchievementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementComponent);
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
    builderInfoSpy.getBuilderInfoType.and.returnValue(Observable.of(Mocks.BUILDERINFOMOCK));
    component.ngOnChanges();

    expect(component.achievement).toEqual(component.playerResult.achievements[0]);
  });

  it('should call builder info service', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    const spy = builderInfoSpy.getBuilderInfoType.and.returnValue(Observable.of(Mocks.BUILDERINFOMOCK));
    component.ngOnChanges();

    expect(spy).toHaveBeenCalledWith(component.achievement.village);
  });

  it('should calculate prozentual portion', () => {
    const value: number = 25;
    const target: number = 40;
    const result: number = 62.5;

    expect(component.calculateProgress(value, target)).toBe(result);
  });

  it('should return bootstrap active class', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    builderInfoSpy.getBuilderInfoType.and.returnValue(Observable.of(Mocks.BUILDERINFOMOCK));
    component.ngOnChanges();

    const result = 'active';

    expect(component.setActiveState(component.achievement.name)).toEqual(result)
  });

  it('should return bootstrap active class', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    builderInfoSpy.getBuilderInfoType.and.returnValue(Observable.of(Mocks.BUILDERINFOMOCK));
    component.ngOnChanges();

    const result = 'active';

    expect(component.setActiveState(component.achievement.name)).toEqual(result)
  });

  it('should return completed Achievements', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    expect(component.calculateCompletedAchievements()).toBe(1);
  });
});
