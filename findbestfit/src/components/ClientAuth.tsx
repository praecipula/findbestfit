'use client';

import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
``
    return (
        <div className="ml-auto">
            <div>{isPending 
                ? <p>Checking login...</p>
                : ses
                    ? <div>
                        <span>Signed in as {ses?.user?.email}</span>
                        <Image src={ses?.user?.image || ""} alt="User Avatar" width={32} height={32} className="rounded-full inline-block ml-2" />
                        <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full" onClick={() => authClient.signOut().then(() => router.refresh())}>Log out</button>
                    </div>
                    : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={goToLoginPage}>Log in</button>
                }
            </div>
        </div>
    )
}; 