import { Database } from "../lib/prisma";

export class DatabaseService {
  protected db: Database;

  constructor(db: Database){
    this.db = db;
  }
}