import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    throw new Error("Authentication required");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).userId = (decoded as any).userId;
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    throw new Error("Invalid token");
  }
};
