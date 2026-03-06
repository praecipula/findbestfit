import Image from "next/image";
import { drizzle } from 'drizzle-orm/d1';
import { usersTable } from "../db/schema";
import { getCloudflareContext } from '@opennextjs/cloudflare';

interface Env {
  prod_findbestfit: D1Database;
}

export default async function Home() {

	async function getUsers() {
		const { env } = getCloudflareContext();
		console.log(env);
		const db = drizzle(env.prod_findbestfit);
		const result = await db.select().from(usersTable).all()
		return result;
	}

	const users = await getUsers();

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
				<ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
					<li className="mb-2 tracking-[-.01em]">
						Get started by editing{" "}
						<code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
							src/app/page.tsx
						</code>
						.
					</li>
					<li className="tracking-[-.01em]">Save and see your changes instantly.</li>
				</ol>
			</main>
			<div>
				{JSON.stringify(users)}
			</div>
		</div>
	);
}
