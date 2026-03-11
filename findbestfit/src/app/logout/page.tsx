'use client';

import { authClient } from "@/components/ClientAuth";
import { useRouter } from "next/navigation";


export default function Logout() {

    const { data: currentSession } = authClient.useSession();
    const router = useRouter();

    const logOut = () => {
        authClient.signOut().then(() => {
            router.push("/");
        });
    };


    return (
        <div>
            <h2>Click the button below to log out from this device:</h2>
            <button onClick={logOut}>Log out</button>
        </div>
    )
};