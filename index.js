import express from "express";
import dbConnect from "./db/db.js";
import { port } from "./config/config.js";

const app = express();

app.listen(port, async () => {
  await dbConnect();
  console.log(`nodes server is running on port: ${port}`);
});
