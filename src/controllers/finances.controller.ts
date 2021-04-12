import { Request, Response } from "express";
import { transalateData } from "../utils/translateData";
import { Transations } from "../models/Transactions";

export class TransactionsController {
  
async showTransations(req: Request, res: Response): Promise<Response> {
  const  transactions = new Transations();
    const result = await transactions.getTransations();
    return res.status(200).json(result[0]);
  }


  async postTransation(
       req: Request,
       res: Response
      ) {
       req.body._date = transalateData(req.body._date);
       req.body._value = parseFloat(req.body._value);
        
       const transactions = new Transations();
       const result = await transactions.postTransaction(req.body);
      
       return  res.status(200).json(result);
     }
}

// export 
