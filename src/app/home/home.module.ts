import { NgModule } from '@angular/core';
import { HomeFontPageComponent } from './components/home-fontpage/home-font-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDescriptionComponent } from './components/home-description/home-description.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    HomeDescriptionComponent,
    PlayerSearchComponent
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
