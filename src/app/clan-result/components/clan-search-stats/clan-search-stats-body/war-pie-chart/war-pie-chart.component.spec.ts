import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WarPieChartComponent} from './war-pie-chart.component';

describe('WarPieChartComponent', () => {
  let component: WarPieChartComponent;
  let fixture: ComponentFixture<WarPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
