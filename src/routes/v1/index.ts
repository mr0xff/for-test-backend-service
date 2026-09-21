import { FastifyInstance } from "fastify";

export default function api(fastify: FastifyInstance){
  const { user } = fastify.service;

  fastify.get("/", async function(req, res){
    res.send({ items: await user.show() });
  });

  fastify.post<{ Body: { name: string }}>("/", async function(req, res){
    const data = await user.add(req.body.name);

    res.code(201).send({ data, message: "user was created!" });
  });
}