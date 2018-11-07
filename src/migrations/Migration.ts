import * as Joi from 'joi';
import * as dynamo from 'dynamodb';
import AWSConfig from '../configs/dynamoDb';

export default abstract class Migration {
    public abstract table();

    constructor() {
        AWSConfig();
        this.table().createTable((error, table) => {
            if (!error) {
                console.log('Table ' + table.TableDescription.TableName + ' has been created.');
            } else {
                console.log('Fail to creating table: ' + error);
            }
        });
    }
}