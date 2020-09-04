import { Resolver, Query } from "@nestjs/graphql";
import { CourtDecision } from "./models/courtDecision.model";
import { CourtDecisionService } from "./courtDecision.service";

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