import express from "express";
import { router as routes} from "./routes/categoriesRoutes"

const app = express()

app.use(express.json())

app.use("/categories", routes)

app.listen(3000, ()=>{
    console.log('Server Running on port', 3000)
})