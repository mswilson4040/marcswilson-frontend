import {LineScore} from './line-score';
import {Status} from './status';
export class Game {
  public linescore: LineScore = new LineScore();
  public status: Status = new Status();
  public homeTeamName: string = null;
  public homeTeamNameAbbr: string = null;
  public awayTeamName: string = null;
  public awayTeamNameAbbr: string = null;
  constructor(data?) {
    if (data) {
      this.linescore = new LineScore(data.linescore);
      this.homeTeamName = data.home_team_name;
      this.homeTeamNameAbbr = data.home_name_abbrev;
      this.awayTeamName = data.away_team_name;
      this.awayTeamNameAbbr = data.away_name_abbrev;
      this.status = new Status(data.status);
    }
  }
}
