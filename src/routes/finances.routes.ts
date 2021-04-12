import { Router } from "express";
import { TransactionsController } from "../controllers/finances.controller";

const transaction = new TransactionsController();
const router = Router();

router.route("/").get(transaction.showTransations);
router.route("/:transationId").get(transaction.showTransation);

router.route("/").post(transaction.postTransation);

router.route("/:transationId").delete(transaction.deleteTransation);

router.route("/:transationId").patch(transaction.updateTransation);

export default router;
