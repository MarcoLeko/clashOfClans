import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './components/app/app.component';
import {HomeModule} from '../home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {database} from '../../firebase-config';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {FormsModule} from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    HomeModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(database.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
