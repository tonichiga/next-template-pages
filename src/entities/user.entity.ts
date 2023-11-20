export class UserEntity {
  id: number;
  firstName?: string;
  lastName?: string;

  constructor(readonly user: any) {
    Object.assign(this, user);
  }

  public get getLaterName(): string {
    return this.firstName?.at(0).toUpperCase();
  }
}
