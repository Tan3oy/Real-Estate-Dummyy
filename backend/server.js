
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/dbConnection.js";
import FAQ_Routes from "./Routes/FAQ_Routes.js";
import Agents_Routes from "./Routes/Agents_Routes.js";
import Clients_Routes from "./Routes/Clients_Routes.js";
import Counter_Routes from "./Routes/Counter_Routes.js";
import Pricing_Cards_Routes from "./Routes/Pricing_Cards_Routes.js";
import All_Properties_Routes from "./Routes/All_Properties_Routes.js";

import Blogs_Routers from "./Routes/Blogs_Routers.js"
import All_Properties_Routes from "./Routes/All_Properties_Routes.js"
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
app.use("/api",Pricing_Cards_Routes)
app.use("/api" ,Blogs_Routers)
app.use("/api" ,All_Properties_Routes)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started at port ${port} successfully`);
  connectDB();
});
