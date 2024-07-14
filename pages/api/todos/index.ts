import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/app/lib/utils/dbConnection";
import Todo, { ITodo } from "@/app/lib/models/todos.model";
import { middlewareWrapper } from "@/app/lib/utils/middlewareWrapper";
import { authMiddleware } from "@/app/lib/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const userId = (req as any).userId;

  if (req.method === "GET") {
    const todos: ITodo[] = await Todo.find({ userId });
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { title, description, status } = req.body as ITodo;
    const todo = new Todo({
      title,
      description,
      status,
      userId,
    });

    await todo.save();
    res.status(201).json(todo);
  } else {
    res.status(405).end();
  }
}

export default middlewareWrapper(authMiddleware, handler);
