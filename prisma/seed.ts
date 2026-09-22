import { prisma } from "../dist/lib/prisma";
import { UserService } from "../dist/services/user.service";

const user = new UserService(prisma);

["root", "samuel", "elliot"].map(async function(name){
  await user.add(name);
})