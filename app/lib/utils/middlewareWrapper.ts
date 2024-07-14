import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export const middlewareWrapper = (
  middleware: (req: NextApiRequest, res: NextApiResponse) => Promise<void>,
  handler: NextApiHandler
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await middleware(req, res);
      return handler(req, res);
    } catch (error) {
      // Handle the error as needed
      if (!res.headersSent) {
        res.status(500).json({ message: "Internal server error" });
      }
      return;
    }
  };
};
