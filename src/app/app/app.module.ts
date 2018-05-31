import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
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
import {AboutComponent} from './components/about/about.component';
import {FooterComponent} from './components/footer/footer.component';
import {GestureConfig} from '@angular/material';
import {SearchForAllModule} from '../search-for-all/search-for-all.module';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent, data: {depth: 2}}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HomeModule,
    FormsModule,
    SearchForAllModule,
    AngularFireModule.initializeApp(database.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
