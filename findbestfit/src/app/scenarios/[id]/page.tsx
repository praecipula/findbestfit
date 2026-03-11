import getDb from "@/db/db"
import { eq } from "drizzle-orm"
import { scenarios } from "@/db/schema/scenario"

const db = await getDb();

interface ScenarioProps {
    params: Promise<{id: string}>
}

export default async function Scenario({params}: ScenarioProps) {

    const p = await(params)
    const id = Number(p.id)

    const getData = async () => {
        //TODO: select one?
        const matchingRecord = await db.select().from(scenarios).where(eq(scenarios.id, id)).limit(1);
        return matchingRecord.at(0)
    }

    const record = await getData();

    return (
        <div>
            <h2>Scenario number {id}</h2>
            <h3>Name: {record?.name ? record.name : "No name"}</h3>
            <p>Description: {record?.description ? record.description : "No description"}</p>
        </div>
    )
};
