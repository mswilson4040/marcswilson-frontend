import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './pages/home/home.component';
import { GlobalNavComponent } from './shared-components/global-nav/global-nav.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MlbApiExplorerComponent } from './pages/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import { MlbStatsComponent } from './pages/portfolio/mlb-stats/mlb-stats.component';
import { MLBPlayersComponent } from './pages/portfolio/mlb-stats/mlbplayers/mlbplayers.component';
import { MLBTeamComponent } from './pages/portfolio/mlb-stats/mlbteam/mlbteam.component';
import { MLBBallparksComponent } from './pages/portfolio/mlb-stats/mlbballparks/mlbballparks.component';
import { MLBteamsComponent } from './pages/portfolio/mlb-stats/mlbteams/mlbteams.component';
import { PowerballComponent } from './pages/portfolio/powerball/powerball.component';
import { OverlayComponent } from './shared-components/overlay/overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormDialogComponent } from './shared-components/dialogs/contact-form-dialog/contact-form-dialog.component';
import { ErrorDialogComponent } from './shared-components/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './shared-components/dialogs/confirm-dialog/confirm-dialog.component';
import { CallbackComponent } from './shared-components/callback/callback.component';
import { LoginDialogComponent } from './shared-components/dialogs/login-dialog/login-dialog.component';
import { AuthService } from './shared-services/auth.service';
import { EmailService } from './shared-services/email.service';
import { PowerballService } from './pages/portfolio/powerball/services/powerball.service';
import { MlbStatsService } from './pages/portfolio/mlb-stats/services/mlb-stats.service';
import { UIService } from './shared-services/ui.service';
import { AuthGuard } from './guards/auth.guard';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatExpansionModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatSliderModule,
  MatTabsModule, MatTooltipModule
} from '@angular/material';
import { ApiExplorerComponent } from './pages/portfolio/apiexplorer/apiexplorer.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonViewerComponent } from './shared-components/json-viewer/json-viewer.component';
import { BreakpointHelperComponent } from './shared-components/breakpoint-helper/breakpoint-helper.component';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';


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
    PowerballComponent,
    OverlayComponent,
    ContactFormDialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    CallbackComponent,
    LoginDialogComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    ApiExplorerComponent,
    JsonViewerComponent,
    BreakpointHelperComponent
  ],
  entryComponents: [
    MLBBallparksComponent,
    MLBPlayersComponent,
    MLBTeamComponent,
    MLBteamsComponent,
    ContactFormDialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    LoginDialogComponent,
    OverlayComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressBarModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    UIService,
    MlbStatsService,
    PowerballService,
    AuthService,
    EmailService,
    AuthGuard,
    BreakpointObserver,
    MediaMatcher
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
