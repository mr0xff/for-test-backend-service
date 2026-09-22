import fp from "fastify-plugin";
import { prisma } from "../lib/prisma";
import { UserService } from "../services";

const service = {
  user: new UserService(prisma),
}

export default fp((fastify) => {
  fastify.decorate("service", service);
});

declare module "fastify" {
  export interface FastifyInstance {
    service: typeof service;
  }
}