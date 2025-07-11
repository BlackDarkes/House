import { Request, Response } from "express";
import { pool } from "../db/connect";
import { IPaintings } from "../types/typePaintings";

export const getPaintings = async (req: Request, res: Response) => {
  try {
    const [paintings] = await pool.query<IPaintings[]>(
      "select * from painting"
    );

    if (paintings.length === 0) {
      res.status(200).json({
        success: true,
        message: "Картин пока что нет!",
      });
      return;
    }

    res.status(200).json(paintings);
  } catch (error) {
    console.log("Не удалось получить данные!");
    res.status(500).json({
      success: false,
      message: "Не удалось получить данные!",
    });
  }
};
