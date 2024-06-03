module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello from Youtube Demo API" }),
  };
};

//on terminal do, export AWS Access Key and AWS Secret
// DO `sls deploy` ( serverless deploy )
// This created a .serverless folder which has all the files