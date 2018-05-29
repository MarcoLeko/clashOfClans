import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultBodyComponent} from './search-result-body.component';

describe('SearchResultBodyComponent', () => {
  let component: SearchResultBodyComponent;
  let fixture: ComponentFixture<SearchResultBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
