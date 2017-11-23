import { environment } from '../../environments/environment';
import { HttpRequestMethods } from '../enums/http-request-methods.enum';

export class ApiRegistry {
  public apis: API[] = [];
  constructor() {
    this.addApi(new API(`${environment.API_PATH}/mlbstats/years`, HttpRequestMethods.GET, 'Seasons', 'Gets all distinct seasons'));
    this.addApi(new API(`${environment.API_PATH}/mlbstats/years/:yeardID/teams`, HttpRequestMethods.GET, 'Teams', 'Gets team by season'));
  }
  addApi(api: API): void {
    this.apis.push(api);
  }
}

export class API {
  public url: string = null;
  public method: string  = null;
  public name: string = null;
  public description: string = null;
  constructor(_url = null, _method = null, _name = null, _description = null) {
    this.url = _url;
    this.method = _method;
    this.name = _name;
    this.description = _description;
  }
}
