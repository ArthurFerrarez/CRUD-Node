import {getRepository} from "typeorm";
import {Category} from "../database/entities/Category";

export class GetAllCategoriesService {
    async execute() {
        const repo = getRepository(Category)

        return await repo.find();
    }
}