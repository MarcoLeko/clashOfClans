import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeFontPageComponent} from './home-font-page.component';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {PlayerSearchComponent} from '../player-search/player-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {ClanSearchComponent} from '../clan-search/clan-search.component';
import {WarFrequencyPipe} from '../../../shared/pipes/war-frequency/war-frequency.pipe';
import {MatSliderModule} from '@angular/material';
import {TypeaheadModule} from 'ngx-bootstrap';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {LocationSearchService} from '../../services/location-search/location-search.service';

describe('HomeFontPageComponent', () => {
  let component: HomeFontPageComponent;
  let fixture: ComponentFixture<HomeFontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatSliderModule,
        TypeaheadModule.forRoot(),
        Angular2FontawesomeModule
      ],
      providers: [
        {provide: Router},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        {provide: LocationSearchService},
        {provide: ClanSearchService}
      ],
      declarations: [
        HomeFontPageComponent,
        JumbotronComponent,
        PlayerSearchComponent,
        ClanSearchComponent,
        WarFrequencyPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFontPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
