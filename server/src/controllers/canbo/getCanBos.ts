import { Request, Response } from "express";
import { db } from "../../db/setup";
import { canBo, heSo, phong, quaTrinhLuong } from "../../db/schema";

const getCanBos = async (req: Request, res: Response) => {
  const canbos = await db.select().from(canBo);

  if (canbos.length < 1) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ data: { canbos } });
};

export default getCanBos;
