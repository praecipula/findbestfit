'use server';

import { createAuth } from "@/app/auth";
import getDb from "@/db/db"
import { scenarios } from "@/db/schema/scenario"

import { redirect } from "next/navigation";

const authClient = await createAuth();
const dbClient = await getDb();

export default async function createScenario(formData: FormData) {

    const rawFormData = {
        name: formData.get('name'),
        description: formData.get('description'),
    };

    const inserted = await dbClient.insert(scenarios).values(rawFormData).returning();

    redirect(`scenarios/${inserted[0].id}`)



};
