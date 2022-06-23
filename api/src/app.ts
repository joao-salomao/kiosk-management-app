import express from "express";
import { useExpressServer } from "routing-controllers";
import { KioskController } from "./controllers/KioskController";

const app = express();

useExpressServer(app, {
  cors: true,
  controllers: [KioskController],
});

app.listen(3001, () => console.log("Server running 🚀"));
