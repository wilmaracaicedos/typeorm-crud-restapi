import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;

    throw new Error("my error !!");
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();

    return res.json(user);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
