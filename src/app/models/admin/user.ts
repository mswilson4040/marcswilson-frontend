import { UserRoles } from '../../enums/user-roles.enum';

export class User {
  public name: string = null;
  public email: string = null;
  public role: UserRoles = null;
  public created: Date = null;
  public passwordHash: string = null;

  constructor(data?) {
    if (data) {
      this.name = data.name;
      this.email = data.email;
      this.role = data.role;
      this.created = data.created;
      this.passwordHash = data.passwordHash;
    }
  }
}
