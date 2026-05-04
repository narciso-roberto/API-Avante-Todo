import express from "express";
import routerLista from "./routes/listaRoutes";
import routerTarefa from "./routes/tarefaRoutes";

const app = express();

app.use(express.json());
app.use("/lista", routerLista);
app.use("/tarefa", routerTarefa);

export default app;
