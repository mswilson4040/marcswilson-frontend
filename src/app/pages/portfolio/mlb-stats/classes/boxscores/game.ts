import {LineScore} from './line-score';
import {BaseRunners} from './base-runners';
import {GameStatus} from './game-status';
export class Game {
  public linescore: LineScore = new LineScore();
  public home_team_name: string = null;
  public home_team_logo: string = null;
  public home_name_abbrev: string = null;
  public away_team_name: string = null;
  public away_team_logo: string = null;
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
      this.home_team_logo = this.getTeamLogo(this.home_name_abbrev);
      this.away_team_name = data.away_team_name;
      this.away_name_abbrev = data.away_name_abbrev;
      this.away_team_logo = this.getTeamLogo(this.away_name_abbrev);
      this.status = new GameStatus(data.status);
      this.away_time = data.away_time;
      this.away_time_zone = data.away_time_zone;
      this.runners_on_base = new BaseRunners(data.runners_on_base);
    }
  }
  getTeamLogo(teamAbbrev: string): string {
    let path = '';
    switch (teamAbbrev) {
      case 'ARI':
        path = '../images/mlb-logos/arizona-diamondbacks.svg';
        break;
      case 'ATL':
        path = '../images/mlb-logos/atlanta-braves.svg';
        break;
      case 'BAL':
        path = '../images/mlb-logos/baltimore-orioles.svg';
        break;
      case 'BOS':
        path = '../images/mlb-logos/boston-red-sox.svg';
        break;
      case 'CHC':
        path = '../images/mlb-logos/chicago-cubs.svg';
        break;
      case 'CWS':
        path = '../images/mlb-logos/chicago-white-sox.svg';
        break;
      case 'CIN':
        path = '../images/mlb-logos/cincinnati-reds.svg';
        break;
      case 'CLE':
        path = '../images/mlb-logos/cleveland-indians.svg';
        break;
      case 'COL':
        path = '../images/mlb-logos/colorado-rockies.svg';
        break;
      case 'DET':
        path = '../images/mlb-logos/detroit-tigers.svg';
        break;
      case 'HOU':
        path = '../images/mlb-logos/houston-astros.svg';
        break;
      case 'KC':
        path = '../images/mlb-logos/kansas-city-royals.svg';
        break;
      case 'LAA':
        path = '../images/mlb-logos/los-angeles-angels-of-anaheim.svg';
        break;
      case 'LAD':
        path = '../images/mlb-logos/los-angeles-dodgers.svg';
      break;
      case 'MIA':
        path = '../images/mlb-logos/miami-marlins.svg';
        break;
      case 'MIL':
        path = '../images/mlb-logos/milwaukee-brewers.svg';
        break;
      case 'MIN':
        path = '../images/mlb-logos/minnesota-twins.svg';
        break;
      case 'NYM':
        path = '../images/mlb-logos/new-york-mets.svg';
        break;
      case 'NYY':
        path = '../images/mlb-logos/new-york-yankees.svg';
        break;
      case 'OAK':
        path = '../images/mlb-logos/oakland-athletics.svg';
        break;
      case 'PHI':
        path = '../images/mlb-logos/philadelphia-phillies.svg';
        break;
      case 'PIT':
        path = '../images/mlb-logos/pittsburgh-pirates.svg';
        break;
      case 'SD':
        path = '../images/mlb-logos/san-diego-padres.svg';
        break;
      case 'SF':
        path = '../images/mlb-logos/san-francisco-giants.svg';
        break;
      case 'SEA':
        path = '../images/mlb-logos/seattle-mariners.svg';
        break;
      case 'STL':
        path = '../images/mlb-logos/st-louis-cardinals.svg';
        break;
      case 'TB':
        path = '../images/mlb-logos/tampa-bay-rays.svg';
        break;
      case 'TEX':
        path = '../images/mlb-logos/texas-rangers.svg';
        break;
      case 'TOR':
        path = '../images/mlb-logos/toronto-blue-jays.svg';
        break;
      case 'WSH':
        path = '../images/mlb-logos/washington-nationals.svg';
        break;
      default:
        path = '../images/mlb-logos/default.svg';
        break;
    }
    return path;
  }
}
