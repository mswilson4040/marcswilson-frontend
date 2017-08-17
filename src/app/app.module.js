"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var shell_component_1 = require("./shell/shell.component");
var home_component_1 = require("./pages/home/home.component");
var global_nav_component_1 = require("./shared-components/global-nav/global-nav.component");
var about_component_1 = require("./pages/about/about.component");
var portfolio_component_1 = require("./pages/portfolio/portfolio.component");
var mlb_api_explorer_component_1 = require("./pages/portfolio/mlb-api-explorer/mlb-api-explorer.component");
var mlb_stats_component_1 = require("./pages/portfolio/mlb-stats/mlb-stats.component");
var mlbplayers_component_1 = require("./pages/portfolio/mlb-stats/mlbplayers/mlbplayers.component");
var mlbteam_component_1 = require("./pages/portfolio/mlb-stats/mlbteam/mlbteam.component");
var mlbballparks_component_1 = require("./pages/portfolio/mlb-stats/mlbballparks/mlbballparks.component");
var mlbteams_component_1 = require("./pages/portfolio/mlb-stats/mlbteams/mlbteams.component");
var powerball_component_1 = require("./pages/portfolio/powerball/powerball.component");
var overlay_component_1 = require("./shared-components/overlay/overlay.component");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var time_tracker_component_1 = require("./pages/portfolio/time-tracker/time-tracker.component");
var contact_form_dialog_component_1 = require("./shared-components/contact-form-dialog/contact-form-dialog.component");
var new_company_dialog_component_1 = require("./pages/portfolio/time-tracker/dialogs/new-company-dialog/new-company-dialog.component");
var time_tracker_timesheet_component_1 = require("./pages/portfolio/time-tracker/time-tracker-timesheet/time-tracker-timesheet.component");
var new_project_dialog_component_1 = require("./pages/portfolio/time-tracker/dialogs/new-project-dialog/new-project-dialog.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                shell_component_1.ShellComponent,
                home_component_1.HomeComponent,
                global_nav_component_1.GlobalNavComponent,
                about_component_1.AboutComponent,
                portfolio_component_1.PortfolioComponent,
                mlb_api_explorer_component_1.MlbApiExplorerComponent,
                mlb_stats_component_1.MlbStatsComponent,
                mlbplayers_component_1.MLBPlayersComponent,
                mlbteam_component_1.MLBTeamComponent,
                mlbballparks_component_1.MLBBallparksComponent,
                mlbteams_component_1.MLBteamsComponent,
                powerball_component_1.PowerballComponent,
                overlay_component_1.OverlayComponent,
                time_tracker_component_1.TimeTrackerComponent,
                contact_form_dialog_component_1.ContactFormDialogComponent,
                new_company_dialog_component_1.NewCompanyDialogComponent,
                time_tracker_timesheet_component_1.TimeTrackerTimesheetComponent,
                new_project_dialog_component_1.NewProjectDialogComponent
            ],
            entryComponents: [
                mlbballparks_component_1.MLBBallparksComponent,
                mlbplayers_component_1.MLBPlayersComponent,
                mlbteam_component_1.MLBTeamComponent,
                mlbteams_component_1.MLBteamsComponent,
                contact_form_dialog_component_1.ContactFormDialogComponent,
                new_company_dialog_component_1.NewCompanyDialogComponent,
                new_project_dialog_component_1.NewProjectDialogComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                animations_1.NoopAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                material_1.MdDatepickerModule,
                material_1.MdInputModule,
                material_1.MdNativeDateModule,
                material_1.MdAutocompleteModule,
                forms_1.ReactiveFormsModule,
                material_1.MdTabsModule,
                material_1.MdCardModule,
                material_1.MdSliderModule,
                material_1.MdDialogModule,
                material_1.MdButtonModule,
                material_1.MdTooltipModule,
                material_1.MdSidenavModule
            ],
            providers: [],
            bootstrap: [shell_component_1.ShellComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map