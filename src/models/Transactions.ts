import { connect } from "../database";
import { Transation } from "../interfaces/transation.interface";
import { changeStatus } from "../utils/changeStatus";
import { defineSearchDateSql } from "../utils/defineSearchDateSql";

export class Transations {
  async getTransactions(): Promise<any> {
    const teste = "2";
    try {
      const conn = await connect();
      const data = await conn.query("SELECT * FROM finances");
      return data;
    } catch (err) {
      return changeStatus(err.message);;
    }
  }

  async getEspecificTransactions(param: string) {
    try {
      let sql: string;
      let teste = (param.charCodeAt(0))//retorna pósção na tabela ASCII
      if (teste>= 95) {//SE FOR O "_" ou maior retono a consulçta de ordenação, caso cotrário retorno a consulta de pesquisa por id
        sql = `SELECT * FROM finances ORDER BY ${param}`;
      } else {
        sql = `SELECT * FROM finances WHERE id=${param}`;
      }

      //console.log(sql);
      const conn = await connect();
      const data = await conn.query(sql);

      return data;
    } catch (err) {
      return changeStatus(err.message);
    }
  }

  async getTransactionByTitle(title: string): Promise<any> {
    try {
      //console.log(title);
      const sql = `SELECT * FROM finances WHERE title='${title}'`;
      //console.log(sql);
      const conn = await connect();
      const data = await conn.query(
        sql
      );

      return data;
    } catch (err) {
      return changeStatus(err.message);
    }
  }

  async getTransactionByValue(value: number): Promise<any> {
    try {
      const sql = `SELECT * FROM finances WHERE _value=${value}`;
      const conn = await connect();
      const data = await conn.query(
        sql
      );

      return data;
    } catch (err) {
      return changeStatus(err.message);
    }
  }

  async getTransactionByDate(date: string): Promise<any> {
    try {

      const sql = defineSearchDateSql(date);

      //console.log(sql);

      const conn = await connect();
      const data = await conn.query(
        sql
      );

      return data;
    } catch (err) {
      return changeStatus(err.message);;
    }
  }

  async postTransaction(newTransaction: Transation): Promise<any> {
    try {
      const conn = await connect();
      const sql = "INSERT INTO finances SET ? ";
      await conn.query(sql, newTransaction);

      return "Transaction add successfully";
    } catch (err) {
      return changeStatus(err.message);;
    }
  }

  async deleteTransaction(id: Number): Promise<any> {
    try {
      const conn = await connect();
      await conn.query(`DELETE FROM finances WHERE id=${id}`);
      return `Transaction ${id} deleted successfully!`;
    } catch (err) {
      return changeStatus(err.message);;
    }
  }

  async updateTransation(
    id: Number,
    updatedTransaction: object
  ): Promise<any> {
    try {
      const conn = await connect();
      await conn.query(`UPDATE finances SET ? WHERE id= ?`, [
        updatedTransaction,
        id,
      ]);
      return `Transaction ${id} updated successfully!`;
    } catch (err) {
      return changeStatus(err.message);;
    }
  }
}
