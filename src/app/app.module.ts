import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChampionsHomeComponent } from './champions-home/champions-home.component';
import { WallOfChampionsComponent } from './wall-of-champions/wall-of-champions.component';
import { PlayersComponent } from './players/players.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CoachesComponent } from './coaches/coaches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChampionsHomeComponent,
    WallOfChampionsComponent,
    PlayersComponent,
    ClubsComponent,
    CoachesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
