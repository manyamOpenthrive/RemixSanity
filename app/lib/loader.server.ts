// ./app/sanity/loader.server.ts

import { queryStore } from "../lib/loader";
import { client } from "../lib/sanity";

export const { loadQuery } = queryStore;

queryStore.setServerClient(client);