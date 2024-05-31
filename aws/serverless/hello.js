module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello from Youtube Demo API" }),
  };
};
