import { Sequelize, DATE as SequalizeDate } from 'sequelize';

export class DBConnectionManager {
  static dbConnection: Sequelize;

  constructor() {}

  static initialize() {

    DBConnectionManager.dbConnection = new Sequelize('grocery', 'root', '1234', {
      host: 'localhost',
      dialect: 'mysql',
      logging: false
    });
  }
}
export const dbConnection = DBConnectionManager.dbConnection;

