import { Request, Response } from "express";
import { db } from "../../db/setup";
import { canBo, phong } from "../../db/schema";
import { eq } from "drizzle-orm";

const getCanBo = async (req: Request, res: Response) => {
  const { userId: id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ error: "missing_parameter", message: "userId is required" });
  }
  try {
    const canBoByID = await db
      .select()
      .from(canBo)
      .where(eq(canBo.maCB, String(id)));

    if (canBoByID.length < 1) {
      return res.status(404).json({ message: "User not found" });
    }

    const canBoData = canBoByID[0];
    // Lấy thông tin từ bảng phongBan
    const phongBanInfo = await db
      .select()
      .from(phong)
      .where(eq(phong.maPhong, Number(canBoData.maPhong)));
    const tenPhongBan = phongBanInfo[0]?.tenPhong;

    return res.status(200).json({ data: { ...canBoByID[0], tenPhongBan } });
  } catch (error) {
    console.log("Error while fetching user", error);
    return res
      .status(500)
      .json({ error: "server_error", message: "Internal Server Error" });
  }
};

export default getCanBo;
