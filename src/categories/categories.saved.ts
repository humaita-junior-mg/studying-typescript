import { Category } from "../model/Category";

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class categories {

    private categories: Category[]

    constructor(){
        this.categories = []
    }

    saveNewCategory({name, description}: ICreateCategoryDTO): void{

        const newCategory = new Category(name, description, new Date())

        this.categories.push(newCategory)
    }

    getAll(){
        return this.categories
    }


}

export { categories }