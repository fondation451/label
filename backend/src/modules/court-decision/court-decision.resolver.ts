import { Resolver, Query } from "@nestjs/graphql";
import { CourtDecision } from "./models/court-decision.model";
import { CourtDecisionService } from "./court-decision.service";

@Resolver(() => CourtDecision)
export class CourtDecisionResolver {
    constructor(
        private courtDecisionService: CourtDecisionService,
    ) { }

    @Query(() => [CourtDecision])
    async courtDecisions() {
        return this.courtDecisionService.findAll();
    }
}