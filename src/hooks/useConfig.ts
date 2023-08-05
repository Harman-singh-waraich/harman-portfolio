import { Client, Databases } from "appwrite";

const getConfig = () => {
  const databaseId = "64cb9235c0f45456b436";
  const collectionId = "64cb923b2afe7f0d81ff";
  const client = new Client();

  const databases = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64cb91a3424e53fbf291");

  return {
    databases,
    client,
    databaseId,
    collectionId,
  };
};
export default getConfig;
