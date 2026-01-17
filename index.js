import express from "express";
import dbConnect from "./db/db.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

const port = process.env.PORT;
app.listen(port, async () => {
  await dbConnect();
  console.log(`nodes server is running on port: ${port}`);
});
