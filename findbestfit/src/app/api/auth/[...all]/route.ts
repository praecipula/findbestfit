import { createAuth } from "@/app/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const GET = async (request: Request) => {
    const { GET } = toNextJsHandler(await createAuth());
    return GET(request);
};

export const POST = async (request: Request) => {
    const { POST } = toNextJsHandler(await createAuth());
    return POST(request);
};
