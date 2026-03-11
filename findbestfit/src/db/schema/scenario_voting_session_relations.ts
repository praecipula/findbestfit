import { relations } from 'drizzle-orm';
import { scenarios } from "./scenario";
import { votingSessions } from "./voting_session";

export const scenarioToVotingSessionRelation = relations(scenarios, ({ one, many }) => ({
  voting_sessions: many(votingSessions)
}));

export const votingSessionToScenarioRelation = relations(votingSessions, ({ one, many }) => ({
    scenario: one(scenarios, {
        fields: [votingSessions.scenarioId],
        references: [scenarios.id],
    }),
}));
