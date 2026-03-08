import { drizzle } from 'drizzle-orm/d1';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import * as auth_schema from './schema/auth-schema';
import * as schema from './schema/schema';

export interface Env {
  prod_findbestfit: D1Database;
}

export default function getDb() {
  const { env } = getCloudflareContext() as unknown as { env: Env };
  return drizzle(env.prod_findbestfit, { schema: { ...auth_schema, ...schema } });
}
