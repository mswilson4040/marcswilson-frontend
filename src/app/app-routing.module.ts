import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {MlbApiExplorerComponent} from './pages/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import {MlbStatsComponent} from './pages/portfolio/mlb-stats/mlb-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'mlbstatsapi', component: MlbApiExplorerComponent},
  { path: 'mlbstats', component: MlbStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
