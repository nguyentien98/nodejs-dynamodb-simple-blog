import * as dynamo from 'dynamodb';
import * as Joi from 'joi';
import BaseModel from './BaseModel';

export default class PostModel extends BaseModel {

    constructor() {
        const model = 'post';
        const schema = {
            hashKey: 'id',
            timestamps: true,
            schema: {
                id: dynamo.types.uuid(),
                title: Joi.string().min(1),
                slug: Joi.string().min(1),
                detail: Joi.string().min(10),
                categoryIds: Joi.array().items(dynamo.types.uuid()),
                commentIds: Joi.array().items(dynamo.types.uuid())
            }
        };

        super(model, schema);
    }


}