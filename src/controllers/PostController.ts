import {Request, Response} from 'express';
import PostModel from '../models/PostModel';

export default class PostController {
    public async listPost(req: Request, res: Response) {
        let model = new PostModel();
        let allPost = await model.update('84b69b0e-07af-49ac-ae7c-7eb20e4ccf78', {
            title: 'Tôi là ai. Hihi'
        });
        res.send(allPost);
    }
}