export class Link {
  public routerLink: string;
  public name: string;
  public icon: string;

  constructor(routerLink: string = '',  name: string = '', icon: string = '') {
    this.routerLink = routerLink;
    this.name = name;
    this.icon = icon;
  }
}
