'use client';

import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export function SessionActiveOrLoginOrSignup() {
    const router = useRouter();

    const {
        data: ses,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();

    const goToLoginPage = () => {
        router.push("/login");
    }

    return (
        <div className="ml-auto">
            <div>{isPending 
                ? <p>Checking login...</p>
                : ses
                    ? `Signed in as ${ses?.user?.email}` 
                    : <button onClick={goToLoginPage}>Log in</button>
                }
            </div>
        </div>
    )
}; 