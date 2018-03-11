import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './views/home/home.component';
import { GlobalNavComponent } from './shared-components/global-nav/global-nav.component';
import { AboutComponent } from './views/about/about.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { MlbApiExplorerComponent } from './views/portfolio/mlb-api-explorer/mlb-api-explorer.component';
import { MlbStatsComponent } from './views/portfolio/mlb-stats/mlb-stats.component';
import { MLBPlayersComponent } from './views/portfolio/mlb-stats/mlbplayers/mlbplayers.component';
import { MLBTeamComponent } from './views/portfolio/mlb-stats/mlbteam/mlbteam.component';
import { MLBBallparksComponent } from './views/portfolio/mlb-stats/mlbballparks/mlbballparks.component';
import { MLBteamsComponent } from './views/portfolio/mlb-stats/mlbteams/mlbteams.component';
import { PowerballComponent } from './views/portfolio/powerball/powerball.component';
import { OverlayComponent } from './shared-components/overlay/overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormDialogComponent } from './shared-components/dialogs/contact-form-dialog/contact-form-dialog.component';
import { ErrorDialogComponent } from './shared-components/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './shared-components/dialogs/confirm-dialog/confirm-dialog.component';
import { CallbackComponent } from './shared-components/callback/callback.component';
import { AuthService } from './shared-services/auth.service';
import { EmailService } from './shared-services/email.service';
import { PowerballService } from './views/portfolio/powerball/services/powerball.service';
import { MlbStatsService } from './views/portfolio/mlb-stats/services/mlb-stats.service';
import { UIService } from './shared-services/ui.service';
import { AuthGuard } from './guards/auth.guard';
import { SkillsComponent } from './views/skills/skills.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatExpansionModule, MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ApiExplorerComponent } from './views/portfolio/apiexplorer/apiexplorer.component';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointHelperComponent } from './shared-components/breakpoint-helper/breakpoint-helper.component';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { AdminComponent } from './views/admin/admin.component';
import { DatabaseManagerComponent } from './views/admin/components/database-manager/database-manager.component';
import { DatabaseSelectorDialogComponent } from './views/admin/dialogs/database-selector-dialog/database-selector-dialog.component';
import { SocketService } from './shared-services/socket.service';
import { NewDatabaseDialogComponent } from './views/admin/dialogs/new-database-dialog/new-database-dialog.component';
import { UsersComponent } from './views/admin/components/users/users.component';
import { UserDialogComponent } from './views/admin/dialogs/user-dialog/user-dialog.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


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
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    ApiExplorerComponent,
    BreakpointHelperComponent,
    AdminComponent,
    DatabaseManagerComponent,
    DatabaseSelectorDialogComponent,
    NewDatabaseDialogComponent,
    UsersComponent,
    UserDialogComponent,
    LoginComponent,
    RegisterComponent
  ],
  entryComponents: [
    MLBBallparksComponent,
    MLBPlayersComponent,
    MLBTeamComponent,
    MLBteamsComponent,
    ContactFormDialogComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    OverlayComponent,
    DatabaseSelectorDialogComponent,
    NewDatabaseDialogComponent,
    UserDialogComponent
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
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatToolbarModule
  ],
  providers: [
    UIService,
    MlbStatsService,
    PowerballService,
    AuthService,
    EmailService,
    AuthGuard,
    BreakpointObserver,
    MediaMatcher,
    SocketService
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
