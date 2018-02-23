import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFontPageComponent } from './home-font-page.component';
import { HomeDescriptionComponent } from '../home-description/home-description.component';
import { PlayerSearchComponent } from '../player-search/player-search.component';

describe('HomeFontPageComponent', () => {
  let component: HomeFontPageComponent;
  let fixture: ComponentFixture<HomeFontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeFontPageComponent,
        HomeDescriptionComponent,
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
