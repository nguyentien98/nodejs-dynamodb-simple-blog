import * as express from 'express';
import PostController from './controllers/PostController';

export default class Route {
    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
        this.posts();
    }

    private posts() {
        const controller = new PostController;
        this.app
            .route('/posts')
            .get(controller.listPost);

    }
}