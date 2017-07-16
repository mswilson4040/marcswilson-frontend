// https://github.com/chadwickbureau/baseballdatabank/tree/master/core
// https://github.com/jimniels/teamcolors
// TODO: http://gd2.mlb.com/components/ <--- LOOK INTO THIS (Box Scores and other game stats from ESPN)
import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Team} from './classes/team';
import {MlbStatsService} from './services/mlb-stats.service';
import {MLBPlayersComponent} from './mlbplayers/mlbplayers.component';
import {MLBTeamComponent} from './mlbteam/mlbteam.component';
import {MLBBallparksComponent} from './mlbballparks/mlbballparks.component';
import {MLBteamsComponent} from './mlbteams/mlbteams.component';
import {UIService} from '../../../shared-services/ui.service';
import {Game} from './classes/boxscores/game';

@Component({
  selector: 'app-mlb-stats',
  templateUrl: './mlb-stats.component.html',
  styleUrls: ['./mlb-stats.component.css']
})
export class MlbStatsComponent implements OnInit {

  private selectedYear: number;
  private selectedTeam: Team;
  private currentComponentRef = null;
  public boxscores: Array<Game> = new Array<Game>();

  @ViewChild('componentPlaceholder', {read: ViewContainerRef}) viewContainerRef;

  constructor(private _mlbStatsService: MlbStatsService, private _componentFactoryResolver: ComponentFactoryResolver,
              private _uiService: UIService) {

    this._mlbStatsService.selectedYear$.subscribe(year => {
      this.selectedYear = year;
    });
    this._mlbStatsService.selectedTeam$.subscribe(team => {
      if (team !== null) {
        this.selectedTeam = team;
        if (this.currentComponentRef !== null) {
          this.currentComponentRef.destroy();
        }
        this.addComponent(MLBTeamComponent);
      }
    });
    this._mlbStatsService.selectedPlayer$.subscribe(player => {
      if (player !== null) {
        this.addComponent(MLBPlayersComponent);
      }
    });
  }

  ngOnInit(): void {
    this._uiService.showOverlay('Fetching Box Scores...');
    this._mlbStatsService.getBoxScores(new Date()).then( bs => {
      this.boxscores = bs;

      this._uiService.hideOverlay();
    });
  }
  addComponent(component): void {
    if (this.currentComponentRef !== null) {
      this.currentComponentRef.destroy();
    }
    const factory = this._componentFactoryResolver.resolveComponentFactory(component);
    this.currentComponentRef = this.viewContainerRef.createComponent(factory);
  }
  goToPlayers(): void {
    this._mlbStatsService.setSelectedPlayer(null);
    this.fadeSelectorToUpperLeft().then( () => {
      this.addComponent(MLBPlayersComponent);
    });

  }
  goToTeams(): void {
    this.fadeSelectorToUpperLeft().then( () => {
      this.addComponent(MLBteamsComponent);
    });
  }
  goToBallparks(): void {
    this.fadeSelectorToUpperLeft().then( () => {
      this.addComponent(MLBBallparksComponent);
    });
  }
  fadeSelectorToUpperLeft(): Promise<any> {
    return new Promise( (resolve, reject) => {
      $('.jumbotron').animate({display: 'none'}, () => {
        resolve();
      });

    });
  }
  shiftRight(): void {
    $('#scorecardContainer').animate({scrollLeft: $('#scorecardContainer').scrollLeft() + 500});
  }
  shiftLeft(): void {
    $('#scorecardContainer').animate({scrollLeft: $('#scorecardContainer').scrollLeft() - 500});
  }

}

