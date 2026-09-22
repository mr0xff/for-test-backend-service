import { prisma } from "../src/lib/prisma";
import { UserService } from "../src/services/user.service";

const user = new UserService(prisma);

["root", "samuel", "elliot"].map(async function(name){
  await user.add(name);
})