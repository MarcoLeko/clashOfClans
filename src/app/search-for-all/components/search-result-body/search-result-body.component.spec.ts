import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultBodyComponent} from './search-result-body.component';
import {IsWarLogPublicPipe} from '../../../clan-result/pipes/is-war-log-public/is-war-log-public.pipe';
import {EnterTypePipe} from '../../../shared/pipes/enter-type/enter-type.pipe';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {Router} from '@angular/router';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';

describe('SearchResultBodyComponent', () => {
  let component: SearchResultBodyComponent;
  let fixture: ComponentFixture<SearchResultBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule
      ],
      providers: [
        {provide: Router},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock}
      ],
      declarations: [
        SearchResultBodyComponent,
        IsWarLogPublicPipe,
        EnterTypePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
