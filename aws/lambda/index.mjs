export const handler = async (event) => {
  // TODO implement

  const response = {
    statusCode: 200,
    headers: {
      // Helps ensure that the response sent is of a JSON type
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      "Hello from Harshil's Lambda Function from serverless"
    ),
  };

  return response;
};
