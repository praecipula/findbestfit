import { drizzle } from 'drizzle-orm/d1';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import * as schema from './schema/schema';

export interface Env {
  prod_findbestfit: D1Database;
}

export default async function getDb() {
  const { env } = await getCloudflareContext({async: true}) as unknown as { env: Env };
  return drizzle(env.prod_findbestfit, 
    { 
        schema: { 
            ...schema, 
        },
    });
}
