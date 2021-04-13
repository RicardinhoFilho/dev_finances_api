import { Request, Response } from "express";
import { translateData } from "../utils/translateData";
import { verifyUpdates } from "../utils/verifyUpdates";
import { Transations } from "../models/Transactions";
import { getResponseStatus } from "../utils/getResponseStatus";

export class TransactionsController {
  async showTransations(req: Request, res: Response): Promise<Response> {
    const transactions = new Transations();
    const result = await transactions.getTransactions();
    return res.status(200).json(result);
  }

  async getTransations(req: Request, res: Response): Promise<Response> {

    const transactions = new Transations();
    const result = await transactions.getTransactions();
    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }

  async getTransationsByTitle(req: Request, res: Response){
    
    const title = req.params.name; 
    const transactions = new Transations();
    const result = await transactions.getTransactionByTitle(title);
    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }

  async getTransationsByValue(req: Request, res: Response){
    
    const value = parseFloat(req.params.value); 
    console.log(value);
    const transactions = new Transations();
    const result = await transactions.getTransactionByValue(value);
    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }

  async getTransationsByDate(req: Request, res: Response){
    
    const date = req.params.date; 
    const transactions = new Transations();
    const result = await transactions.getTransactionByDate(date);
    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }


  async getEspecificTransactions(req: Request, res: Response): Promise<Response> {
    const param = req.params.param;
    const transactions = new Transations();
    const result = await transactions.getEspecificTransactions(param);
    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }

  async postTransation(req: Request, res: Response) {
    req.body._date = translateData(req.body._date);
    req.body._value = parseFloat(req.body._value);

    const transactions = new Transations();
    const result = await transactions.postTransaction(req.body);

    const status =getResponseStatus(result);
    return res.status(status).json(result[0]);
  }

  async deleteTransation(req: Request, res: Response) {
    const id: Number = parseInt(req.params.transationId);
    const transactions = new Transations();

    const result = await transactions.deleteTransaction(id);

    const status =getResponseStatus(result);
    return res.status(status).json(result);
  }

  async updateTransation(req: Request, res: Response) {
    const id: Number = parseInt(req.params.transationId);
    const transactions = new Transations();
    const updatedTransaction = req.body;
    const validupdatedTransaction = verifyUpdates(updatedTransaction);

    const result = await transactions.updateTransation(id, updatedTransaction );
    const status =getResponseStatus(result);
    return res.status(status).json(result);
  }
}


