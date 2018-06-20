import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AngularFireStorage, useClass: FirebaseStorageMock}],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
