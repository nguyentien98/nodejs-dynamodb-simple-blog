import * as AWS from 'aws-sdk';
import * as dynamodb from 'dynamodb';
import {ServiceConfigurationOptions} from 'aws-sdk/lib/service';

export default function AWSConfig() {
    let serviceConfigOptions : ServiceConfigurationOptions = {
        region: process.env.REGION || 'ap-northeast-1',
        credentials: new AWS.SharedIniFileCredentials(),
        endpoint: process.env.DYNAMO_ENDPOINT || 'http://localhost:8000'
    };
    
    let awsDynamoDB = new AWS.DynamoDB(serviceConfigOptions);
    dynamodb.dynamoDriver(awsDynamoDB);
}