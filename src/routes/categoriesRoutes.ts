import { Router } from "express"
import { categories } from "../categories/categories.saved"
const router = Router()

const category = new categories()

router.post("/", (request, response)=>{

    const { name, description } = request.body;

    category.saveNewCategory({name, description})

    return response.status(201).send()
})

router.get("/", (request, response)=>{
    return response.status(200).json(category.getAll())
})

export { router }

