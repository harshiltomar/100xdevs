import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
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

async function putObject(filename, contentType) {
  const command = new PutObjectCommand({
    Bucket: "harshil-private",
    Key: `/uploads/user-uploads/${filename}`,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function listObject() {
  const command = new ListObjectsV2Command({
    Bucket: "harshil-private",
    Key: "/",
  });
  const result = await s3Client.send(command);
  console.log(result);
}

async function init() {
  // console.log("URL for harshil.jpg is: ", await getObjectURL("harshil.jpg"));
  console.log(
    `URL for uploading`,
    await putObject(`image-${Date.now()}.jpeg`, "image/jpeg")
  );
  await listObject();
}
// Then go to this url on Postman, select put, body: binary, select file

init();
