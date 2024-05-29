//@ts-ignore
import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
  DynamoDBDocumentClient,
  //@ts-ignore
} from "@aws-sdk/client-dynamodb";

// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

//@ts-ignore
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const dynamoDBClient = new DynamoDBClient({ region: "us-east-1" });

async function putItem() {
  try {
    const result = await dynamoDBClient.send(
      new PutItemCommand({
        TableName: "my-awesome-table",
        Item: {
          pk: { S: "user|1" },
          sk: { S: "user|1" },
          name: { S: "Harshil" },
          age: { N: "22" },
        },
      })
    );
    console.log("Item added successfully", result);
  } catch (error) {
    console.error("Error adding item to DynamoDB", error);
  }
}

putItem();

// How to do a query in DynamoDB
async function QueryItem() {
  try {
    const queryCommand = new QueryCommand({
      TableName: "my-awesome-table",
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        // here S means string
        ":pk": { S: "user|1" },
      },
    });
    const results = await dynamoDBClient.send(queryCommand);
    console.log(results.Items?.map((item) => unmarshall(item)));
  } catch (error) {
    console.error("Error adding item to DynamDB:", error);
  }
}

// Method 2

// important is to handle imports in the right way
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  const command = new QueryCommand({
    TableName: "my-awesome-table",
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "user|1",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
