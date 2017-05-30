import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BeerMenuCollection} from '../classes/beer-menu-collection';
import {BeerMenu} from '../classes/beer-menu';
import {Beer} from '../classes/beer';
import {Http} from '@angular/http';
import {BeerInformation} from '../classes/beer-information';

@Injectable()
export class BeerTrackerService {

  public beerMenuCollection$: BehaviorSubject<BeerMenuCollection> = new BehaviorSubject<BeerMenuCollection>(new BeerMenuCollection());
  public activeMenu$: BehaviorSubject<BeerMenu> = new BehaviorSubject<BeerMenu>(new BeerMenu());
  public beerInfo$: BehaviorSubject<Beer> = new BehaviorSubject<Beer>(new Beer());

  set beerMenuCollection(value: any) {
    if (value !== null) {
      this.beerMenuCollection$.next(value);
    }
  }
  set activeMenu(value: any) {
    if (value !== null) {
      this.activeMenu$.next(value);
    }
  }
  set beerInfo(value: any) {
    if (value !== null) {
      this.beerInfo$.next(value);
    }
  }

  constructor(private http: Http) {
  }

  showBeerInfoDialog(beer: Beer) {
    this.beerInfo = beer;
  }
  buildBeerMenuCollection(id: string): Promise<BeerMenuCollection> {
    let completedBeers: any;
    let liveBeers: any;
    let incompleteBeers: any;
    let untappdReferences: any;

    return new Promise((resolve, reject) => {
      Promise.all([this.getLiveMenu(), this.getCompletedBeers('10153584464812091'), this.getUntappdReferenceTable()]).then(responses => {
          liveBeers = responses[0];
          completedBeers = responses[1];
          incompleteBeers = this.buildIncompleteBeersList(liveBeers, completedBeers);
          untappdReferences = responses[2];
          resolve(new BeerMenuCollection(completedBeers, liveBeers, incompleteBeers, untappdReferences));
        },
        error => {
          reject(error);
        })
    });
  }
  buildIncompleteBeersList(liveBeers: any, completedBeers: any): Array<Object> {
    const liveBeerLength = liveBeers.length;
    const ret = new Array<Object>();
    for (let i = 0; i < liveBeerLength; i++) {
      const liveBeer = liveBeers[i];
      const matched = completedBeers.filter(beer => {
        return beer['Beer'] === liveBeer['Beer'];
      })[0];

      if (typeof matched === 'undefined') {
        ret.push(liveBeer);
      }
    }

    return ret;
  }
  getLiveMenu(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/beertracker/getLiveMenu').subscribe(pageSource => {
          try {
            const ret: Array<Object> = [];
            const ps = pageSource['_body'].replace(/img[^>]*/g, '').replace('*', '');
            const html = $.parseHTML(ps);
            const menuDiv = $(html).find('.TabbedPanelsContent')[0];
            const types = $(menuDiv).find('h2');

            for (let i = 0; i < types.length; i++) {
              const type = $(types[i]);
              const typeName = type.text();
              const brEls = type.next().find('br');

              for (let j = 0; j < brEls.length; j++) {
                const el = brEls[j];
                if (el.nextSibling) {
                  const beerName = $(el.nextSibling).text().trim();
                  if (beerName !== '' && beerName !== 'With Extra Hops') {
                    ret.push({Type: typeName, Beer: beerName});
                  }
                }
              }
            }
            resolve(ret);

          } catch(ex) {
            console.log(ex);
          }
        },
        error => {
          reject(error);
        });
    });
  }
  getCompletedBeers(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/beertracker/getCompletedBeers', {id: id}).subscribe(completedBeers => {
          const body = JSON.parse(completedBeers['_body']);
          resolve(body);
        },
        error => {
          reject(error);
        })
    });
  }
  getUntappdInfo(beer: Beer): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/beertracker/getUntappdInfo', {beer: beer}).subscribe(info => {
          let body = info['_body'];
          body = JSON.parse(body);
          resolve(body);
        },
        error => {
          reject(error);
        })
    })
  }
  getUntappdInfoByBID(bid: string, beer: Beer): Promise<BeerInformation> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/beertracker/getUntappdInfoByBID', {bid: bid}).subscribe(info => {
        let body = info['_body'];
        body = JSON.parse(body);
        const beerInfo = new BeerInformation(body.response);
        this.setUntappdReference(beer.name, beer.type, beerInfo['bid'], beerInfo['beer_label'], beerInfo['rating_score']).then(info => {
          beer['info'] = beerInfo;
          // this.refreshBeerMenuCollection();
          resolve(beerInfo);
        });
      });
    });
  }
  getUntappdReferenceTable(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/beertracker/getUntappdReferenceTable').subscribe(data => {
        const body = JSON.parse(data['_body']);
        resolve(body);
      })
    })
  }
  setUntappdReference(name: string, type: string, bid: string, label: string, rating: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/beertracker/setUntappdReference', {
        name: name,
        type: type,
        bid: bid,
        label: label,
        rating: rating
      }).subscribe(info => {
        resolve();
      });
    });
  }
  toggleCompleteState(beer: Beer): Promise<any> {
    const userId = '10153584464812091';
    return new Promise((resolve, reject) => {
      this.http.post('/api/beertracker/toggleCompleteState', {beer: beer, userId: userId}).subscribe(data => {
        beer.completed = !beer.completed;
        this.refreshBeerMenuCollection();
        resolve(beer);
      });
    })
  }
  refreshBeerMenuCollection(): void {
    this.buildBeerMenuCollection('10153584464812091').then(bmc => {
      this.beerMenuCollection = bmc;
    })
  }
  setActiveMenu(beerMenu: BeerMenu): void {
    this.activeMenu = beerMenu;
  }
}
