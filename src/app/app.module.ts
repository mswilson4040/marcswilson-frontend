import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import {HomeComponent} from './pages/home/home.component';
import { GlobalNavComponent } from './shared-components/global-nav/global-nav.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MlbApiExplorerComponent } from './pages/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import { MlbStatsComponent } from './pages/portfolio/mlb-stats/mlb-stats.component';
import { MLBPlayersComponent } from './pages/portfolio/mlb-stats/mlbplayers/mlbplayers.component';
import { MLBTeamComponent } from './pages/portfolio/mlb-stats/mlbteam/mlbteam.component';
import { MLBBallparksComponent } from './pages/portfolio/mlb-stats/mlbballparks/mlbballparks.component';
import { MLBteamsComponent } from './pages/portfolio/mlb-stats/mlbteams/mlbteams.component';
import { SliderComponent } from './pages/portfolio/mlb-stats/slider/slider.component';
import { PowerballComponent } from './pages/portfolio/powerball/powerball.component';


@NgModule({
  declarations: [
    ShellComponent,
    HomeComponent,
    GlobalNavComponent,
    AboutComponent,
    PortfolioComponent,
    MlbApiExplorerComponent,
    MlbStatsComponent,
    MLBPlayersComponent,
    MLBTeamComponent,
    MLBBallparksComponent,
    MLBteamsComponent,
    SliderComponent,
    PowerballComponent
  ],
  entryComponents: [MLBBallparksComponent, MLBPlayersComponent, MLBTeamComponent, MLBteamsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
