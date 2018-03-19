import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementModalComponent } from './achievement-modal.component';
import { ModalModule } from 'ngx-bootstrap';

describe('AchievementModalComponent', () => {
  let component: AchievementModalComponent;
  let fixture: ComponentFixture<AchievementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ],
      declarations: [ AchievementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
