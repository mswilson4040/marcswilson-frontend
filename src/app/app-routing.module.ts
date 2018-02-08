import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { MlbApiExplorerComponent } from './views/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import { MlbStatsComponent } from './views/portfolio/mlb-stats/mlb-stats.component';
import { PowerballComponent } from './views/portfolio/powerball/powerball.component';
import { ApiExplorerComponent } from './views/portfolio/apiexplorer/apiexplorer.component';
import { AdminComponent } from './views/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ AuthGuard ] },
  { path: 'apiexplorer', component: ApiExplorerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mlbstats', component: MlbStatsComponent },
  { path: 'mlbstatsapi', component: MlbApiExplorerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:email', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'powerball', component: PowerballComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
