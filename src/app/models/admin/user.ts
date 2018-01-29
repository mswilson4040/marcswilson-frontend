import { UserRoles } from '../../enums/user-roles.enum';

export class User {
  public name: string = null;
  public email: string = null;
  public role: UserRoles = null;
  public created: Date = null;
}
