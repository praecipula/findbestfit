'use client';

import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

export default function GoogleFullLogin() {

	const signIn = async () => {
		const data = await authClient.signIn.social({
			provider: "google",
		});
	};

    return (
        <div>
            <h1>Google Full Login</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </div>
    )
};
