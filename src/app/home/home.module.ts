import { NgModule } from '@angular/core';
import { HomeFontPageComponent } from './components/home-fontpage/home-font-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDescriptionComponent } from './components/home-description/home-description.component';
import { ClanSearchComponent } from './components/clan-search/clan-search.component';

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    HomeDescriptionComponent,
    ClanSearchComponent
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
