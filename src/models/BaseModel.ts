import AWSConfig from '../configs/dynamoDb';
import * as dynamo from 'dynamodb';
import * as Joi from 'joi';

export default class BaseModel {

    private model;

    constructor(model: string, schema: object) {
        AWSConfig();
        this.model = dynamo.define(model, schema);
    }

    public getModel() {
        return this.model;
    }

    public all() {
        return new Promise((resolve, reject) => {
            this.model
                .scan()
                .loadAll()
                .exec((error, data) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(data);
                });
        });
    }

    public create(item: object) {
        return new Promise((resolve, reject) => {
            this.model
                .create(item, (error, data) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(data);
                });
        });
    }
    public delete(id) {
        return new Promise((resolve, reject) => {
            this.model
                .destroy({id: id}, (error) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(true);
                });
        });
    }

    public find(id) {
        return new Promise((resolve, reject) => {
            this.model
                .get(id, (error, data) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(data);
                });
        });
    }

    public async update(id, item: object) {
        let record = await this.find(id);
        if (!id) {
            return false;
        }
        item['id'] = id;
        return new Promise((resolve, reject) => {
            this.model.update(item, (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            });
        });
    }
}