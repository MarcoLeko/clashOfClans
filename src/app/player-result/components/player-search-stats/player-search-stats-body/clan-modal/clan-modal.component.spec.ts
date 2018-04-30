import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanModalComponent} from './clan-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {FirebaseStorageMock} from '../../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {AgGridModule} from 'ag-grid-angular';

describe('ClanModalComponent', () => {
  let component: ClanModalComponent;
  let fixture: ComponentFixture<ClanModalComponent>;

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
});
