import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from '../footer/footer.component';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock}
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
