export class Personal {

  // <editor-fold desc="Personal Class Properties">
  public playerID: string = null;
  public birthYear: number = null;
  public birthMonth: number = null;
  public birthDay: number = null;
  public age: number = null;
  public birthCountry: string = null;
  public birthState: string = null;
  public birthCity: string = null;
  public deathYear: number = null;
  public deathMonth: number = null;
  public deathDay: number = null;
  public deathCountry: string = null;
  public deathState: string = null;
  public deathCity: string = null;
  public nameFirst: string = null;
  public nameLast: string = null;
  public nameGiven: string = null;
  public fullName: string = null;
  public weight: number = null;
  public height: number = null;
  public bats: string = null;
  public throws: string = null;
  public debut: string = null;
  public finalGame: string = null;
  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[ obj ] = data[ obj ];
        }
      }
      this.init();
    }
  }
  init(): void {
    this.age = this.getAge(this.birthMonth, this.birthDay, this.birthYear);
    this.fullName = this.getFullName(this.nameFirst, this.nameLast);
  }
  getAge(month: number, day: number, year: number): number {
    if (month && day && year) {
      const birthday = new Date(year, (month - 1), day);
      const ageDiffMonth = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDiffMonth);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      return null;
    }
  }
  getFullName(nameFirst: string, nameLast: string) {
    if (nameFirst && nameLast) {
      return `${nameFirst} ${nameLast}`;
    }
  }
}
