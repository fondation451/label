import { Module } from '@nestjs/common';
import { CourtDecisionResolver } from './court-decision.resolver';
import { CourtDecisionService } from './court-decision.service';

@Module({
  providers: [CourtDecisionResolver, CourtDecisionService]
})
export class CourtDecisionModule { }
