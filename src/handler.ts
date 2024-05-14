import { APIGatewayEvent, Context } from 'aws-lambda';
import { DynamoDBAdapter } from './dbread';

export const getActStatus = async (event: APIGatewayEvent, context: Context) => {
  let dynamodb = new DynamoDBAdapter();
  try{
    let response = dynamodb.get("TEST-BIZ-ID");
      return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}
 catch (error) {
    throw error;
}
};