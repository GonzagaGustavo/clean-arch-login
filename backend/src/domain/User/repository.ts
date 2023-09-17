import { DataTypes, ModelCtor } from "sequelize";
import orm from "../../framework/database";
import UserEntity from "./entity";

export default class UserRepository {
  UserModel = orm.define("user", {
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  });

  async create(user: UserEntity) {
    const created = await this.UserModel.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    console.log(created);
  }
}
