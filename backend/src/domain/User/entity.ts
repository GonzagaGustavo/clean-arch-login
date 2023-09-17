import MissingParamError from "../../interfaces/errors/missing-param";

export default class UserEntity {
  _id?: number;
  _name: string;
  _email: string;
  _password: string;

  get id(): number | undefined {
    return this._id;
  }

  set id(id: number | undefined) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (!name) throw new MissingParamError("name");
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    if (!email) throw new MissingParamError("email");
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    if (!password) throw new MissingParamError("password");
    this._password = password;
  }
}
