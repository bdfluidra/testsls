
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

let dynamoDBDocClient: DynamoDBDocumentClient;

const marshallOptions = {
    removeUndefinedValues: true
};

const translateConfig = { marshallOptions };

const getDdbClient = () => {
    if (!dynamoDBDocClient) {
        const client = new DynamoDBClient({
            region: process.env.REGION || "us-east-1",
        });
        dynamoDBDocClient = DynamoDBDocumentClient.from(client, translateConfig);
    }
    return dynamoDBDocClient;
}

export { getDdbClient };

