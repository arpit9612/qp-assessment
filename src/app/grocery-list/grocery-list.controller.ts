import { Request, Response } from "express";
import { groceryListHelper } from "./grocery-list.helper";
import { errorHandler } from "../../error/error-handler";
import { CONSTANTS } from "../../config/constants/constants";
import { GroceryItem } from "./grocery-list.interface";

class GropceryListController {

    async getGroceryList(res: Response) {
        try {
            const groceryList = await groceryListHelper.getGroceryList();
            let response = {} as any;
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            response.groceryList = groceryList;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            errorHandler.handleException(res);
        }
    }

    async getAvailableGroceryList(res: Response) {
        try {
            const groceryList = await groceryListHelper.getAvailableGroceryList();
            let response = {} as any;
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            response.groceryList = groceryList;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            errorHandler.handleException(res);
        }
    }

    async addGroceryItem(req: Request, res: Response) {
        try {
            let request = {...req.body} as GroceryItem;
            let response = {} as any;
            const groceryItem: any = await groceryListHelper.addGroceryItem(request);
            response.groceryItemId = groceryItem.groceryItemId;
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            errorHandler.handleException(res);
        }
    }

    async updateGroceryItem(req: Request, res: Response) {
        try {
            let request = {...req.body} as GroceryItem;
            let response = {} as any;
            await groceryListHelper.updateGroceryItem(request);
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            errorHandler.handleException(res);
        }
    }

    async deleteGroceryItem(req: Request, res: Response) {
        try {
            let groceryItemId = req.query?.groceryItemId;
            let response = {} as any;
            await groceryListHelper.deleteGroceryItem(groceryItemId);
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            console.log(e)
            errorHandler.handleException(res);
        }
    }

    async orderGroceryItems(req: Request, res: Response) {
        try {
            let request = {...req.body} as any;
            let response = {} as any;
            for(let item of request.ordersList) {
                let groceryItem: any = await groceryListHelper.getGroceryItemById(item.groceryItemId);
                if(groceryItem) {
                    await groceryListHelper.createOrder(item);
                    groceryItem.piecesAvailable = Number(groceryItem.piecesAvailable - item.quantity);
                    await groceryListHelper.updateGroceryItem(groceryItem);
                }
                else {
                    response.status = CONSTANTS.STATUS_SUCCESS;
                    response.message = 'Item out of stock.'
                    response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
                    return res.status(CONSTANTS.STATUS.OK).json(response)
                }
            }
            response.status = CONSTANTS.STATUS_SUCCESS;
            response.message = 'Order created successfully.'
            response.responseCode = CONSTANTS.RESPONSE_CODE.SUCCESS;
            return res.status(CONSTANTS.STATUS.OK).json(response)
        }
        catch(e) {
            console.log(e);
            errorHandler.handleException(res);
        }
    }

}
export const groceryListController = new GropceryListController();