import app from "./app";
import usersRoutes from "./Lists/routes/listRouter";

const PORT = 3000;

app.use("/lists", usersRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
