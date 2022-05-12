import {getRepository} from "typeorm";
import {Video} from "../database/entities/Video";
import {Category} from "../database/entities/Category";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({category_id, duration, name, description}:VideoRequest): Promise<Video | Error> {
        const repo = getRepository(Video)
        const repoCategory = getRepository(Category)


        if(!await repoCategory.findOne(category_id)){
            return new Error("Category does not exists!")
        }

        const video = repo.create({name, description, duration, category_id});



        await repo.save(video)

        return video;
    }
}