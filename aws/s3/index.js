import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});
// Create a new User Harshil and use his creds here; So the client will make api calls on behalf of Harshil user

async function getObjectURL(key) {
  const command = GetObjectCommand({
    Bucket: "harshil-private",
    Key: key,
  });

  const url = getSignedUrl(s3Client, command);
  return url;
}

async function init() {
  console.log("URL for harshil.jpg is: ", await getObjectURL("harshil.jpg"));
}

init();
