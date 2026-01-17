import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

export { port, mongo_uri };
