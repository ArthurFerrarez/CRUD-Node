import {Request, Response} from "express";
import {getAllVideosService} from "../services/GetAllVideosService";

export class GetAllVideosController {
    async handle(req: Request, res: Response) {
        const service = new getAllVideosService();

        const videos = await service.execute();
        return res.json(videos);
    }
}