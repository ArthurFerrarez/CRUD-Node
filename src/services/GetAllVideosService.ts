import {getRepository} from "typeorm";
import {Video} from "../database/entities/Video";

export class getAllVideosService {
    async execute() {
        const repo = getRepository(Video)

        return await repo.find({
            relations: ['category']
        });
    }
}