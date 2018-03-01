import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JumbotronComponent} from './jumbotron.component';
import {By} from '@angular/platform-browser';

describe('JumbotronComponent', () => {
  let component: JumbotronComponent;
  let fixture: ComponentFixture<JumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronComponent);
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
