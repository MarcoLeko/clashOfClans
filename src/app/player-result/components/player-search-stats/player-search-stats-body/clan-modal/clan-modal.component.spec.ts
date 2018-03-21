import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanModalComponent} from './clan-modal.component';
import {ModalModule} from 'ngx-bootstrap';

describe('ClanModalComponent', () => {
  let component: ClanModalComponent;
  let fixture: ComponentFixture<ClanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot()
      ],
      declarations: [ ClanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
