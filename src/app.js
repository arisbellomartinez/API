import express from "express"
import morgan from "morgan"
import usuariosRoutes from "./routes/usuarios.routes.js"
import indexRoutes from "./routes/index.routes.js"
const app = express();


app.use(morgan("dev"));
app.use(express.json())



//Routes

app.use("/tasks",indexRoutes)
app.use("/tasks",usuariosRoutes)

app.use((req,res,next) => {
    res.status(404).json({error: "Not Found"})
})

export default app;