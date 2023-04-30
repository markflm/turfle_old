import PocketBase from "pocketbase";

export const pocketbase = new PocketBase(process.env.POCKETBASE_URL);
