import {Router} from 'express';
import {TransactionsController } from '../controllers/finances.controller';

const transaction = new TransactionsController();
const router = Router();

router.route('/').get(transaction.showTransations);


router.route('/').post(transaction.postTransation);

export default router;