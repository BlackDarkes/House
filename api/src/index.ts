import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";

import { pool } from "./db/connect";
import * as Controller from "./controllers/paintings.controller";

pool
  .getConnection()
  .then((conn) => {
    console.log("Good connection to database!");
    conn.release();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const app = express();
const PORT: number = Number(process.env.API_POST) || 8000;
const HOST: string = process.env.API_HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "../public/")));

app.get("/paintings", Controller.getPaintings);

app.listen(PORT, HOST, (error: any) => {
  if (error) {
    console.log("Error server: ", error);
  }
  console.log("Server work!");
});
