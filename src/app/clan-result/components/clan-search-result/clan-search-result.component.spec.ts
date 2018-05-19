import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchResultComponent} from './clan-search-result.component';

describe('ClanSearchResultComponent', () => {
  let component: ClanSearchResultComponent;
  let fixture: ComponentFixture<ClanSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
