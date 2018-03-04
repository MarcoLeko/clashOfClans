import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeFontPageComponent} from './home-font-page.component';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {PlayerSearchComponent} from '../player-search/player-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";

describe('HomeFontPageComponent', () => {
  let component: HomeFontPageComponent;
  let fixture: ComponentFixture<HomeFontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {provide: Router}
      ],
      declarations: [
        HomeFontPageComponent,
        JumbotronComponent,
        PlayerSearchComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
