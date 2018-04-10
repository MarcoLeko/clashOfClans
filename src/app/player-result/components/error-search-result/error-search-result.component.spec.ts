import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorSearchResultComponent} from './error-search-result.component';
import {Router} from '@angular/router';
import {FirebaseMock} from '../../../testing/firebase-mock';
import {AngularFireStorage} from 'angularfire2/storage';

describe('ErrorSearchResultComponent', () => {
  let component: ErrorSearchResultComponent;
  let fixture: ComponentFixture<ErrorSearchResultComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Router, useValue: routerStub}, {provide: AngularFireStorage, useClass: FirebaseMock}],
      declarations: [ ErrorSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSearchResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate on submit', () => {
    component.onSubmit();
    expect(routerStub.navigate).toHaveBeenCalledWith(['/']);
  });
});
