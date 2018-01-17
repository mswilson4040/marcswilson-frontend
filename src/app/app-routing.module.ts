import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { MlbApiExplorerComponent } from './views/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import { MlbStatsComponent } from './views/portfolio/mlb-stats/mlb-stats.component';
import { PowerballComponent } from './views/portfolio/powerball/powerball.component';
import { CallbackComponent } from './shared-components/callback/callback.component';
import { ApiExplorerComponent } from './views/portfolio/apiexplorer/apiexplorer.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'mlbstatsapi', component: MlbApiExplorerComponent},
  { path: 'mlbstats', component: MlbStatsComponent},
  { path: 'powerball', component: PowerballComponent},
  { path: 'apiexplorer', component: ApiExplorerComponent },
  { path: 'admin', component: AdminComponent },
  // TODO: Delete the below line. Saving as an example for the usage of AuthGuard.
  // { path: 'timetracker', component: TimeTrackerComponent, canActivate: [AuthGuard]},
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
