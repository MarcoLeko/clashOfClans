import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchComponent} from './clan-search.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {TypeaheadModule} from 'ngx-bootstrap';
import {MatSliderModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {WarFrequencyPipe} from '../../../shared/pipes/war-frequency/war-frequency.pipe';
import {Router} from '@angular/router';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';
import {LocationSearchService} from '../../services/location-search/location-search.service';

describe('ClanSearchComponent', () => {
  let component: ClanSearchComponent;
  let fixture: ComponentFixture<ClanSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule,
        ReactiveFormsModule,
        Angular2FontawesomeModule,
        TypeaheadModule.forRoot()
      ],
      providers: [
        {provide: Router},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        {provide: LocationSearchService},
        {provide: ClanSearchService}
      ],
      declarations: [
        ClanSearchComponent,
        WarFrequencyPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
