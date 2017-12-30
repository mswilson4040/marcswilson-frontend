export class Navbar {
  public links: NavbarHeaderLink[] = [];
  constructor() {
    const home = new NavbarHeaderLink();
    home.name = 'Home';
    home.url = '/home';
    home.icon = 'home';
    this.addLink(home);

    // const about = new NavbarHeaderLink();
    // about.name = 'About';
    // about.url = '/about';
    // about.icon = 'account_circle';
    // this.addLink(about);
    //
    // const portfolio = new NavbarHeaderLink();
    // portfolio.name = 'Porfolio';
    // portfolio.url = '/portfolio';
    // portfolio.icon = 'card_travel';
    // this.addLink(portfolio);
  }
  addLink(navbarHeaderLink: NavbarHeaderLink): void {
    this.links.push(navbarHeaderLink);
  }

}

export class NavbarHeaderLink {
  public expanded = false;
  public icon: string = null;
  public name: string = null;
  public url: string = null;
  public children: NavbarChildLink[] = [];
  constructor() {}
}

export class NavbarChildLink {
  public name: string = null;
  public url: string = null;
  constructor(name?: string, url?: string) {
    this.name = name;
    this.url = url;
  }
}
