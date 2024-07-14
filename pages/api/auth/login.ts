import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "@/app/lib/models/user.model";
import dbConnect from "@/app/lib/utils/dbConnection";

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

  const user: IUser | null = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
}
