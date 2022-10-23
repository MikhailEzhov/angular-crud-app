export interface IСreatedUser {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
}

export interface IUser extends IСreatedUser {
  _id: string;
}
