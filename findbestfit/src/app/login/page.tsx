import GoogleFullLogin from "@/components/google-full-login";

export default async function Login() {
    return (
        <div>
            <h2>Log in using one of the methods below:</h2>
            <GoogleFullLogin />
        </div>
    )
};