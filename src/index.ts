import express, { Application, Request, Response } from 'express';
import { BaseRoutes } from './config/base-routes';
import { DBConnectionManager } from './config/db-connection';
import { Middleware } from './config/middleware';
import helmet from 'helmet';
import bodyParser from 'body-parser';

class IndexServer {
    app: Application = express();
    PORT=3000;

    constructor() {
        this.init();
        this.configureBodyParser();
        this.initBaseRoutes();
        this.initDbConnection();
        this.initModels();
    }

    private init() {
        this.app.listen(this.PORT, ()=> {
            console.log(`Server started on port ${this.PORT}`);
        });
    }

    private initBaseRoutes() {
        new BaseRoutes(this.app);
    }

    private initDbConnection() {
        DBConnectionManager.initialize();
        DBConnectionManager.dbConnection.authenticate().then(()=> {
            console.log('connected to DB');
        }).catch((e: Error)=> {

            console.log('connection failed', e);
        });
    }

    private initModels() {
        new Middleware();
    }

    private configureBodyParser() {
        this.app.use(helmet());
        this.app.use(bodyParser.json());
    }
}

export default new IndexServer();