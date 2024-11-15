
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/dbConnection.js";
import FAQ_Routes from "./Routes/FAQ_Routes.js";
import Agents_Routes from "./Routes/Agents_Routes.js";
import Clients_Routes from "./Routes/Clients_Routes.js";
import Counter_Routes from "./Routes/Counter_Routes.js";

const port = 5000;
const app = express();

connectDB();

// cors
app.use(
  cors({
    origin: "*",
  })
);

// Middlewires

app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());
app.use("/api", FAQ_Routes)
app.use("/api", Agents_Routes)
app.use("/api", Clients_Routes)
app.use("/api", Counter_Routes)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at port ${port} successfully`);
  connectDB();
});
