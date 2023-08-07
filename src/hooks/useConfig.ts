import { Client, Databases } from "appwrite";

const getConfig = () => {
  const databaseId = process.env.DATABASE_ID!;
  const collectionId = process.env.COLLECTION_ID!;
  const client = new Client();

  const databases = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.APPWRITE_PROJECT_ID!);

  return {
    databases,
    client,
    databaseId,
    collectionId,
  };
};
export default getConfig;
