import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/lib/utils/dbConnection";
import User, { IUser } from "@/app/lib/models/user.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  await dbConnect();

  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const existingUser: IUser | null = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });

  await user.save();

  res.status(201).json({ message: "User registered successfully" });
}
