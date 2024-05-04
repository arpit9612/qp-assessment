import { GroceryItemModel } from "../models/grocery-item.model";
import { GroceryOrdersModel } from "../models/grocery-order.model";

export class Middleware {
    constructor() {
        this.initModels();
    }

    private initModels() {
        GroceryItemModel.initialize();
        GroceryOrdersModel.initialize();
    }
}