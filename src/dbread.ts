import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { Constants } from './constants';
import { getDdbClient } from './ddbClient';
import { Repository } from './repository';

export class DynamoDBAdapter implements Repository {

    private static readonly TABLE_NAME = process.env.FLUIDRAPRO_TABLE;

    async get(businessID: string): Promise<Record<string, any>> {
        try {
            const attributes: string[] = ['myPerksActivationStatus', 'businessName'];
            const input: GetCommandInput = {
                TableName: DynamoDBAdapter.TABLE_NAME,
                Key: {
                    PK: `b#${businessID}`,
                    SK: Constants.METADATA
                },
                ProjectionExpression: attributes.join(',')
            };
            const response = await getDdbClient().send(new GetCommand(input));
            return response.Item!;
        } catch (error) {
            throw error;
        }
    }
}