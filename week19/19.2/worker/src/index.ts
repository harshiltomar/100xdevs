import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string) {
  const { problemId, code, language } = JSON.parse(submission);

  console.log(`Processing submission for problemID ${problemId}...`);
  console.log(`Code: ${code}`);
  console.log(`Language: ${language}`);

  // Processing logic for leetcode problem

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finishes processing submission for problemId ${problemId}`);
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Worker connected to Redis");

    // Main loop
    while (true) {
      try {
        const submission = await client.brPop("problems", 0);
        // @ts-ignore
        await processSubmission(submission.element);
      } catch (error) {
        console.error("Error processing submission: ", error);
        // Implement error handling logic here. For example push the submission back onto the queueu or log the error to a file
      }
    }
  } catch (error) {
    console.error("Failed to connect to Redix", error);
  }
}
