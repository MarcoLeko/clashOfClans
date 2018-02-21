import { NgModule } from '@angular/core';
import { HomeFontPageComponent } from './home-fontpage/home-font-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    NavbarComponent
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
