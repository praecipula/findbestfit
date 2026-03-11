import createScenario from "@/app/scenarios/createScenario"

export default async function Scenarios() {
    return (
        <div>
            <h2>Choose or create a new Scenario</h2>
            <form action={createScenario}>
            <label htmlFor="name">Item Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={3} />

            <button type="submit">Create Item</button>
            </form>
        </div>
    )
};
