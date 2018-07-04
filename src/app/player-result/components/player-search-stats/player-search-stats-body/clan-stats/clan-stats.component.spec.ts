import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanStatsComponent} from './clan-stats.component';
import {ModalModule} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {FirebaseStorageMock} from '../../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {AgGridModule} from 'ag-grid-angular';

describe('ClanStatsComponent', () => {
  let component: ClanStatsComponent;
  let fixture: ComponentFixture<ClanStatsComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        AgGridModule.withComponents([])
      ],
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock}
      ],
      declarations: [ ClanStatsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanStatsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
