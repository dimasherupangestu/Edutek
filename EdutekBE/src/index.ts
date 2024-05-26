import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import router from "./routes/index";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(
      cors({
        credentials: true,
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        preflightContinue: true,
      })
    );

    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(process.env.PORT, async () => {
      console.log("Server Running Cuy");
    });
  })
  .catch((error) => console.log(error));
