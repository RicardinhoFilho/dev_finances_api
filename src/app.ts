import express, {Application} from 'express';
import cors from "cors";

//ROUTES
import IndexRoutes  from './routes/index.routes'
import FinancesRoutes  from './routes/finances.routes'

export class App{
   private app: Application;

    constructor(private port?: number | string){

        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3333);
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
        this.app.use(cors())
    }

    async listen(){
        
     await this.app.listen(this.app.get('port'));
    console.log(`Server on port ${this.app.get('port')}`);    
    }

    routes(){
        this.app.use('/',IndexRoutes);
        this.app.use('/transactions',FinancesRoutes);
    }
}