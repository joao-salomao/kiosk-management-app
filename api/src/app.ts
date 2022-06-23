import express from "express";
import { useExpressServer } from "routing-controllers";
import { KioskController } from "./controllers/KioskController";

const app = express();

useExpressServer(app, {
  controllers: [KioskController],
});

app.listen(3000, () => console.log("Server running 🚀"));
