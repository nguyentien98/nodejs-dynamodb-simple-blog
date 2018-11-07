import * as dynamo from 'dynamodb';
import * as Joi from 'joi';
import BaseModel from './BaseModel';

export default class AccountModel extends BaseModel {

    constructor() {
        const model = 'account';
        const schema = {
            hashKey: 'id',
            rangeKey: 'email',
            timestamps: true,
            schema: {
                id: dynamo.types.uuid(),
                email: Joi.string().email(),
                name: Joi.string(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
            }
        };

        super(model, schema);
    }


}