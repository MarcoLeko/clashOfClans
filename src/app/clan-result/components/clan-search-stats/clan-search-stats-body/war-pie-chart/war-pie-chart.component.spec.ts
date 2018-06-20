import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WarPieChartComponent} from './war-pie-chart.component';
import {ChartsModule} from 'ng2-charts';
import {UiSwitchModule} from 'ngx-ui-switch';

describe('WarPieChartComponent', () => {
  let component: WarPieChartComponent;
  let fixture: ComponentFixture<WarPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiSwitchModule,
        ChartsModule
      ],
      declarations: [ WarPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarPieChartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
