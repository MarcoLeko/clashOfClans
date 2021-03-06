import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchComponent} from './player-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Mocks} from '../../../testing/mocks';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';

describe('PlayerSearchComponent', () => {
  let component: PlayerSearchComponent;
  let fixture: ComponentFixture<PlayerSearchComponent>;

  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [{provide: Router, useValue: routerStub}, {provide: AngularFireStorage, useClass: FirebaseStorageMock}],
      declarations: [PlayerSearchComponent]
    })
      .compileComponents();

      fixture = TestBed.createComponent(PlayerSearchComponent);
  }));

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should navigate to search result', () => {
    component = fixture.componentInstance;
    const testObj: any = {
      playerId: Mocks.PLAYERTAG
    };
    component.onSubmit(testObj);

    expect(routerStub.navigate).toHaveBeenCalledWith(['playerSearch/' + Mocks.PLAYERTAG]);
  });
});
