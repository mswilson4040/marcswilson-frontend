export class AuthenticationResponse {
  public at_hash: string = null;
  public aud: string = null;
  public exp: Date = null;
  public family_name: string = null;
  public gender: string = null;
  public given_name: string = null;
  public iat: Date = null;
  public iss: string = null;
  public locale: string = null;
  public name: string = null;
  public nickname: string = null;
  public nonce: string = null;
  public picture: string = null;
  public sub: string = null;
  public updated_at: Date = null;
  constructor(data?) {
    if (data) {
      this.at_hash = data.at_hash;
      this.aud = data.aud;
      this.exp = new Date(data.exp);
      this.family_name = data.family_name;
      this.gender = data.gender;
      this.given_name = data.given_name;
      this.iat = new Date(data.iat);
      this.iss = data.iss;
      this.locale = data.locale;
      this.name = data.name;
      this.nickname = data.nickname;
      this.nonce = data.nonce;
      this.picture = data.picture;
      this.sub = data.sub;
      this.updated_at = new Date(data.updated_at);
    }
  }
}
