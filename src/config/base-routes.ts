import { Application, Router } from "express";
import { groceryListRoutes } from "../app/grocery-list/grocery-list.routes";

export class BaseRoutes {
    constructor(app: Application) {
        this.initBaseRoutes(app);
    }

    private initBaseRoutes(app: Application) {
        app.use('/', groceryListRoutes.routes)
    }
}