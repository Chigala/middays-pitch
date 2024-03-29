"use server";

import { client } from "@/lib/redix";

export async function setViewCount(path: string) {
  return client.incr(`views-${path}`);
}
