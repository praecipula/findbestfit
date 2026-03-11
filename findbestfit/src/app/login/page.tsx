import GoogleFullLogin from "@/components/GoogleFullLogin";

export default async function Login() {
    return (
        <div>
            <h2>Log in using one of the methods below:</h2>
            <GoogleFullLogin />
        </div>
    )
};