import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanModalComponent} from './clan-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {By} from '@angular/platform-browser';
import {Mocks} from '../../../../../testing/mocks';
import {FirebaseMock} from '../../../../../testing/firebase-mock';
import {AngularFireStorage} from 'angularfire2/storage';

describe('ClanModalComponent', () => {
  let component: ClanModalComponent;
  let fixture: ComponentFixture<ClanModalComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ],
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: AngularFireStorage, useClass: FirebaseMock}
      ],
      declarations: [ ClanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate on memberSearch', () => {
    const modal: any = {
      hide: function () {}
    };
    component.childModal = modal;
    const testObj = Mocks.PLAYERSTATSBYPLAYERTAG;
    const routeParams: Params = ['search/' + testObj.tag];
    const spy = routerStub.navigate.and.returnValue(Observable.of(routeParams));
    component.memberSearch(testObj);

    expect(spy).toHaveBeenCalledWith(routeParams);
  });

  it('should render grid', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    component.clanInfo = Mocks.CLANSTATSBYCLANTAG;

    fixture.detectChanges();

    const debugElm = fixture.debugElement.query(By.css('td'));
    const nativeElm = debugElm.nativeElement;

    expect(nativeElm.textContent).toMatch(Mocks.CLANSTATSBYCLANTAG.memberList[0].tag)
  });
});
