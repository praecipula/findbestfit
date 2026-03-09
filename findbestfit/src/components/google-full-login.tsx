'use client';
import { Roboto } from "next/font/google";
import { createAuthClient } from "better-auth/client";
import Image from "next/image";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const authClient = createAuthClient();

export default function GoogleFullLogin() {

	const signIn = async () => {
		const data = await authClient.signIn.social({
			provider: "google",
		});
	};

    return (
        <div className="flex items-center gap-4">
            <div className="flex-row ml-auto mr-auto">
                <button className={`${roboto.variable} antialiased cursor-pointer`} onClick={signIn}><Image src="/auth/google/neutral/web_neutral_rd_SI.svg" alt="Google Icon" width={200} height={20} /></button>
            </div>
        </div>
    )
};
