import { Model, BIGINT, STRING, DATE, NOW, INTEGER } from 'sequelize';
import { DBConnectionManager } from '../config/db-connection';

export class GroceryOrdersModel extends Model {
  static initialize() {
    initModel();
  }
}

function initModel() {
    GroceryOrdersModel.init(
    {
      orderId: {
        type: INTEGER,
        field: "orderId",
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      groceryItemId: {
        type: INTEGER,
        field: "groceryItemId",
        allowNull: false
      },
      quantity: {
        type: INTEGER,
        field: "quantity",
        allowNull: false
      }
    },
    {
      sequelize: DBConnectionManager.dbConnection,
      modelName: 'GroceryOrdersModel',
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      tableName: 'GroceryOrders',
    },
  );
}
