import { connect } from "../database";
import { Transation } from "../interfaces/transation.interface";

export class Transations {
  async getTransactions(option?: string): Promise<object|string> {
    try {
      const conn = await connect();
      if(option?.length != 0){
        const data = await conn.query("SELECT * FROM finances ORDER BY ?" , option);
      }else{
        const data = await conn.query("SELECT * FROM finances");
      }
      
      return data[0];
    } catch (err) {
      return err.message;
    }
  }

  async getTransaction(id: number): Promise<object|string> {
    try {
    const conn = await connect();
    const data = await conn.query("SELECT * FROM finances WHERE id=?", id);

    return data[0];
    }catch (err) {
        return err.message;
    }
  }



  async postTransaction(newTransaction: Transation): Promise<String> {
    try {
      const conn = await connect();
      const sql = "INSERT INTO finances SET ? ";
      await conn.query(sql, newTransaction);

      return "Transaction add successfully";
    } catch (err) {
      return err.message;
    }
  }

  async deleteTransaction(id: Number): Promise<String> {
    try {
      const conn = await connect();
      await conn.query(`DELETE FROM finances WHERE id=${id}`);
      return `Transaction ${id} deleted successfully!`;
    } catch (err) {
      return err.message;
    }
  }

  async updateTransation(
    id: Number,
    updatedTransaction: object
  ): Promise<String> {
    try {
      const conn = await connect();
      await conn.query(`UPDATE finances SET ? WHERE id= ?`, [
        updatedTransaction,
        id,
      ]);
      return `Transaction ${id} updated successfully!`;
    } catch (err) {
      return err.message;
    }
  }
}
