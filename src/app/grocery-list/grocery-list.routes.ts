import { Router, Request, Response } from "express";
import { groceryListController } from "./grocery-list.controller";

class GroceryListRoutes {

    private router: Router = Router();
    get routes() {

        this.router.get('/admin/get-grocery-list', (req: Request, res: Response)=> {
            groceryListController.getGroceryList(res);
        });

        this.router.post('/admin/add-grocery-item', (req: Request, res: Response)=> {
            groceryListController.addGroceryItem(req, res);
        });

        this.router.put('/admin/update-grocery-item', (req: Request, res: Response)=> {
            groceryListController.updateGroceryItem(req, res);
        });

        this.router.delete('/admin/delete-grocery-item', (req: Request, res: Response)=> {
            groceryListController.deleteGroceryItem(req, res);
        });

        this.router.get('/user/get-available-grocery-list', (req: Request, res: Response)=> {
            groceryListController.getAvailableGroceryList(res);
        });

        this.router.post('/user/order-grocery-items', (req: Request, res: Response)=> {
            groceryListController.orderGroceryItems(req, res);
        })

        return this.router;
    }
}

export const groceryListRoutes = new GroceryListRoutes();