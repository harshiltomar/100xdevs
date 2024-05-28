const AWS = require("aws-sdk");
require("dotenv").config();

// creates connection to AWS
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Creating a DynamoClient connection
const dynamoClient = new AWS.DynamoDB.DocumentClient();
// Here we specify the table name that we connect to
const TABLE_NAME = "harrypotter-api";

const getCharacters = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  // Scan basically performs the READ operation
  const characters = await dynamoClient.scan(params).promise();

  return characters;
};

const getCharacterById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };

  return await dynamoClient.get(params).promise();
};

const addOrUpdateCharacter = async (character) => {
  const params = {
    TableName: TABLE_NAME,
    Item: character,
  };

  // Either add a new character to the DB or update the  existing character based on the ID
  return await dynamoClient.put(params).promise();
};

const deleteCharacter = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };

  return await dynamoClient.delete(params).promise();
};

module.exports = {
  dynamoClient,
  getCharacters,
  getCharacterById,
  addOrUpdateCharacter,
  deleteCharacter,
};

// Returns an object with an Empty array[]
//getCharacters();

const harrypotter = {
  id: 0,
  name: "Harry Potter",
  species: "human",
  gender: "male",
  datOfBirth: "31-07-1998",
  ancestry: "half-blood",
  eyeColour: "green",
  hairColour: "black",
  wand: {
    wood: "holly",
    core: "pheonix feather",
    length: 11,
  },
  patronus: "stag",
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: "Daniel Radcliffe",
  alive: true,
  Image: "random-link.jpg",
};

//addOrUpdateCharacter(harrypotter);
