import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule, MdChipsModule, MdDatepickerModule, MdDialogModule, MdInputModule,
  MdNativeDateModule, MdSelectModule, MdSidenavModule,
  MdSliderModule,
  MdTabsModule, MdTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TimeTrackerComponent } from './pages/portfolio/time-tracker/time-tracker.component';
import { ContactFormDialogComponent } from './shared-components/contact-form-dialog/contact-form-dialog.component';
import { CompanyDialogComponent } from './pages/portfolio/time-tracker/dialogs/company-dialog/company-dialog.component';
import { TimeTrackerTimesheetComponent } from './pages/portfolio/time-tracker/time-tracker-timesheet/time-tracker-timesheet.component';
import { EntryDialogComponent } from './pages/portfolio/time-tracker/dialogs/entry-dialog/entry-dialog.component';
import { ProjectDialogComponent } from './pages/portfolio/time-tracker/dialogs/project-dialog/project-dialog.component';
import { ErrorDialogComponent } from './shared-components/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './shared-components/confirm-dialog/confirm-dialog.component';
import { TimeTrackerCalendarComponent } from './pages/portfolio/time-tracker/time-tracker-calendar/time-tracker-calendar.component';


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
    TimeTrackerComponent,
    ContactFormDialogComponent,
    CompanyDialogComponent,
    TimeTrackerTimesheetComponent,
    EntryDialogComponent,
    ProjectDialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    TimeTrackerCalendarComponent
  ],
  entryComponents: [
    MLBBallparksComponent,
    MLBPlayersComponent,
    MLBTeamComponent,
    MLBteamsComponent,
    ContactFormDialogComponent,
    CompanyDialogComponent,
    EntryDialogComponent,
    ProjectDialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdCardModule,
    MdSliderModule,
    MdDialogModule,
    MdButtonModule,
    MdTooltipModule,
    MdSidenavModule,
    MdSelectModule,
    MdChipsModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
