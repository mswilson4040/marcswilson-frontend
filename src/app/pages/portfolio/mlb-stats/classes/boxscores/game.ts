import {LineScore} from './line-score';
import {BaseRunners} from './base-runners';
import {GameStatus} from './game-status';
export class Game {
  public linescore: LineScore = new LineScore();
  public home_team_name: string = null;
  public home_name_abbrev: string = null;
  public away_team_name: string = null;
  public away_name_abbrev: string = null;
  public away_time: string = null;
  public away_time_zone: string = null;
  public runners_on_base: BaseRunners = new BaseRunners();
  public status: GameStatus = new GameStatus();
  constructor(data?) {
    if (data) {
      this.linescore = new LineScore(data.linescore);
      this.home_team_name = data.home_team_name;
      this.home_name_abbrev = data.home_name_abbrev;
      this.away_team_name = data.away_team_name;
      this.away_name_abbrev = data.away_name_abbrev;
      this.status = new GameStatus(data.status);
      this.away_time = data.away_time;
      this.away_time_zone = data.away_time_zone;
      this.runners_on_base = new BaseRunners(data.runners_on_base);
    }
  }
}
