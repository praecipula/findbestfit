import { user } from "../db/schema/auth-schema";
import getDb from "../db/db";
import { loggedIn } from "@/app/auth";
import Link from "next/link";


export default async function Home() {

	async function getUsers() {
		const db = await getDb()
		const result = await db.select().from(user).all()
		return result;
	}

	const users = await getUsers();

	return (
		<div className="font-sans grid grid-rows-6 items-center justify-items-center min-h-screen p-8 pb-20 gap-4">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				FindBestFit: choose, as a team, simply.
			</main>
			<div>
				{
					await loggedIn()
					? <p>Create a new scenario</p> 
					: <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Log in to create a scenario</Link>
				}
			</div>
		</div>
	);
}
