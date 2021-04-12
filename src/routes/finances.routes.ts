import { Router } from "express";
import { TransactionsController } from "../controllers/finances.controller";

const transaction = new TransactionsController();
const router = Router();

router.route("/").get(transaction.getTransations);
router.route("/:param").get(transaction.getEspecificTransactions);

router.route("/").post(transaction.postTransation);

router.route("/:transationId").delete(transaction.deleteTransation);

router.route("/:transationId").patch(transaction.updateTransation);

router.route("/:transationId").put(transaction.updateTransation);

export default router;
