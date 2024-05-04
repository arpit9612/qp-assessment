import { Model, BIGINT, STRING, DATE, NOW, INTEGER, BOOLEAN } from 'sequelize';
import { DBConnectionManager } from '../config/db-connection';

export class GroceryItemModel extends Model {
  static initialize() {
    initModel();
  }
}

function initModel() {
    GroceryItemModel.init(
    {
      dateCreated: {
        type: DATE,
        field: "dateCreated",
        allowNull: true
      },
      dateDeleted: {
        type: DATE,
        field: "dateDeleted",
        allowNull: true
      },
      groceryItemId: {
        type: INTEGER,
        field: "groceryItemId",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      groceryItemName: {
        type: STRING,
        field: "groceryItemName",
        allowNull: false
      },
      groceryItemPrice: {
        type: INTEGER,
        field: "groceryItemPrice",
        allowNull: false
      },
      isDeleted: {
        type: BOOLEAN,
        field: "isDeleted",
        allowNull: true
      },
      piecesAvailable: {
        type: INTEGER,
        field: "piecesAvailable",
        allowNull: false
      }
    },
    {
      sequelize: DBConnectionManager.dbConnection,
      modelName: 'GroceryItemModel',
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      tableName: 'GroceryItem',
    },
  );
}
