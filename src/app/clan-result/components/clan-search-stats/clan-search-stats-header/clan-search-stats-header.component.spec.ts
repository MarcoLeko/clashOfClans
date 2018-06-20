import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsHeaderComponent} from './clan-search-stats-header.component';
import {EnterTypePipe} from '../../../../shared/pipes/enter-type/enter-type.pipe';
import {WarFrequencyPipe} from '../../../../shared/pipes/war-frequency/war-frequency.pipe';
import {IsWarLogPublicPipe} from '../../../pipes/is-war-log-public/is-war-log-public.pipe';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';

describe('ClanSearchStatsHeaderComponent', () => {
  let component: ClanSearchStatsHeaderComponent;
  let fixture: ComponentFixture<ClanSearchStatsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFireStorage, useClass: FirebaseStorageMock}
        ],
      declarations: [
        ClanSearchStatsHeaderComponent,
        EnterTypePipe,
        WarFrequencyPipe,
        IsWarLogPublicPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
