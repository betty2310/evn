import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// routes
import canBoRouter from "./routes/canBo";

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/canbo", canBoRouter);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
