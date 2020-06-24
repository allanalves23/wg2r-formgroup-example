import { Gender } from "./GenderEnum";

export class UserModel {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: Gender;
}
