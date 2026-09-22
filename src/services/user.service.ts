import { Database } from "../lib/prisma";
import { DatabaseService } from "./database.service";

export class UserService extends DatabaseService{
  constructor(db: Database) {
    super(db);
  }

  async add(name: string){
    const data = await this.db.user.create({
      data: { name }
    });

    return data.id;
  }

  async show() { 
    return await this.db.user.findMany();
  }
}