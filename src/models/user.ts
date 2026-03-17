export class User {
  public name: string | undefined
  public email: string | undefined
  public password_hash: string | undefined
  public permission: 'ACTIVE' | 'DEFAULT' | undefined
}
