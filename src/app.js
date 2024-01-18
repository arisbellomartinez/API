import express from "express"
import morgan from "morgan"
import usuariosRoutes from "./routes/usuarios.routes.js"
import indexRoutes from "./routes/index.routes.js"
const app = express();
const port = 8080
app.use(morgan("dev"));
app.use(express.json())



//Routes

app.use(indexRoutes)
app.use(usuariosRoutes)











app.listen(port);