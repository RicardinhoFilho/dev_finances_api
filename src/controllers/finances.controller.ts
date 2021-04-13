import { Request, Response } from "express";
import { translateData } from "../utils/translateData";
import { verifyUpdates } from "../utils/verifyUpdates";
import { Transations } from "../models/Transactions";

export class TransactionsController {
  async showTransations(req: Request, res: Response): Promise<Response> {
    const transactions = new Transations();
    const result = await transactions.getTransactions();
    return res.status(200).json(result);
  }

  async getTransations(req: Request, res: Response): Promise<Response> {

    const transactions = new Transations();
    const result = await transactions.getTransactions();
    return res.status(200).json(result);
  }

  async getTransationsByTitle(req: Request, res: Response){
    
    const title = req.params.name; 
    const transactions = new Transations();
    const result = await transactions.getTransactionByTitle(title);
    return res.status(200).json(result);
  }

  async getTransationsByValue(req: Request, res: Response){
    
    const value = parseFloat(req.params.value); 
    console.log(value);
    const transactions = new Transations();
    const result = await transactions.getTransactionByValue(value);
    return res.status(200).json(result);
  }

  async getTransationsByDate(req: Request, res: Response){
    
    const date = req.params.date; 
    const transactions = new Transations();
    const result = await transactions.getTransactionByDate(date);
    return res.status(200).json(result);
  }


  async getEspecificTransactions(req: Request, res: Response): Promise<Response> {
    const param = req.params.param;
    const transactions = new Transations();
    const result = await transactions.getEspecificTransactions(param);
    return res.status(200).json(result);
  }

  async postTransation(req: Request, res: Response) {
    req.body._date = translateData(req.body._date);
    req.body._value = parseFloat(req.body._value);

    const transactions = new Transations();
    const result = await transactions.postTransaction(req.body);

    return res.status(200).json(result);
  }

  async deleteTransation(req: Request, res: Response) {
    const id: Number = parseInt(req.params.transationId);
    const transactions = new Transations();

    const result = await transactions.deleteTransaction(id);

    res.status(200).json(result);
  }

  async updateTransation(req: Request, res: Response) {
    const id: Number = parseInt(req.params.transationId);
    const transactions = new Transations();
    const updatedTransaction = req.body;
    const validupdatedTransaction = verifyUpdates(updatedTransaction);

    const result = await transactions.updateTransation(id, updatedTransaction );

    return res.status(200).json(result);

  }
}


