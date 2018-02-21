import { NgModule } from '@angular/core';
import { HomeFontPageComponent } from './home-fontpage/home-font-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeDescriptionComponent } from './home-description/home-description.component';

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    NavbarComponent,
    HomeDescriptionComponent
  ],
  imports: [CommonModule,
    RouterModule.forRoot(
      appRoutes
    )],
  providers: [],
  exports: []
})
export class HomeModule {
}
