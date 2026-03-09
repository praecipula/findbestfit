import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import getDb from "../db/db";

export async function createAuth() {
    const db = await getDb();
    return betterAuth({
        database: drizzleAdapter(db, {
            provider: "sqlite",
        }),
        emailAndPassword: {
            enabled: true
        },
        baseURL: process.env.BETTER_AUTH_URL,
        socialProviders: {
            google: {
                clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET!,
            },
        },
    });
}
