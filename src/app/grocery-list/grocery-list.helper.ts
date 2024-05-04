import { Op } from "sequelize";
import { GroceryItemModel } from "../../models/grocery-item.model";
import { GroceryOrdersModel } from "../../models/grocery-order.model";
import moment from "moment";

class GroceryListHelper {

    async getGroceryList() {
        try {
            return await GroceryItemModel.findAll({
                where: {
                    isDeleted: false
                },
                attributes: [`groceryItemId`, `groceryItemName`, `groceryItemPrice`, `piecesAvailable`]
            })
        }
        catch(e: any) {
            throw e;
        }
    }

    async getAvailableGroceryList() {
        try {
            return await GroceryItemModel.findAll({
                where: {
                    isDeleted: false,
                    piecesAvailable: {
                        [Op.gt]: 0
                    }
                },
                attributes: [`groceryItemId`, `groceryItemName`, `groceryItemPrice`, `piecesAvailable`]
            })
        }
        catch(e) {
            throw e;
        }
    }

    async addGroceryItem(request: any) {
        try {
            return await GroceryItemModel.create(request);
        }
        catch(e: any) {
            throw e;
        }
    }

    async updateGroceryItem(request: any) {
        try {
            return await GroceryItemModel.update(request, 
            {
                where: {
                    groceryItemId: request.groceryItemId
                }
            });
        }
        catch(e: any) {
            throw e;
        }
    }

    async deleteGroceryItem(groceryItemId: any) {
        try {
            return await GroceryItemModel.update({isDeleted: true, dateDeleted: moment()}, 
            {
                where: {
                    groceryItemId: groceryItemId
                }
            });
        }
        catch(e: any) {
            throw e;
        }
    }

    async getGroceryItemById(groceryItemId: any) {
        try {
            return await GroceryItemModel.findOne({
                where: {
                    groceryItemId: groceryItemId,
                    piecesAvailable: {
                        [Op.gt]: 0
                    }
                },
                raw: true,
                attributes: ['groceryItemId', 'piecesAvailable']
            })
        }
        catch(e) {
            throw e;
        }
    }

    async createOrder(request: any) {
        try {
            console.log(request)
            return await GroceryOrdersModel.create(request);
        }
        catch(e) {
            throw e;
        }
    }

}
export const groceryListHelper = new GroceryListHelper()