import { connect } from "../database";
import { Transation } from "../interfaces/transation.interface";

export class Transations {
  async getTransations() {
    const conn = await connect();
    const data = await conn.query("SELECT * FROM finances");

    return data;
  }

  async postTransaction(newTransaction: Transation) {
    try {
      const conn = await connect();
      const sql = "INSERT INTO finances SET ? ";
      await conn.query(sql, newTransaction);

      return "Transaction add successfully";
    } catch (err) {
      return err.message;
    }
  }
}
