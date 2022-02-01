import { v4 as uuidv4 } from "uuid"

class Category{
    id?: string;
    name: string;
    description: string;
    created_at: Date

    constructor(name: string, description: string, created_at: Date){
        if(!this.id){
            this.id = uuidv4()
        }

        this.name = name 
        this.description = description
        this.created_at = created_at

    }
}

export { Category }