import express from "express";
import routerLista from "./routes/listaRoutes";
import routerTarefa from "./routes/tarefaRoutes";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use("/tarefa", routerTarefa);
app.use("/lista", routerLista);

export default app;
