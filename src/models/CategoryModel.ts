import * as dynamo from 'dynamodb';
import * as Joi from 'joi';
import BaseModel from './BaseModel';

export default class CategoryModel extends BaseModel {

    constructor() {
        const model = 'category';
        const schema = {
            hashKey: 'id',
            timestamps: true,
            schema: {
                id: dynamo.types.uuid(),
                name: Joi.string().min(1),
                slug: Joi.string().min(1),
                postIds: Joi.array().items(dynamo.types.uuid())
            }
        };

        super(model, schema);
    }


}