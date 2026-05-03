import express from "express";
// import router from "./Lists/controllers/listControler";

const app = express();

app.use(express.json());
// app.use(router)

export default app;