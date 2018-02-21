import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDescriptionComponent } from './home-description.component';
import { By } from '@angular/platform-browser';

describe('HomeDescriptionComponent', () => {
  let component: HomeDescriptionComponent;
  let fixture: ComponentFixture<HomeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDescriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    const debugElement = fixture.debugElement.query(By.css('h1'));
    const renderedText = debugElement.nativeElement.textContent;

    const expectedText = 'Hello, Fellow Clasher!';
    expect(renderedText).toBe(expectedText);
  });
});
