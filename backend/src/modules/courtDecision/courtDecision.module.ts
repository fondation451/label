import { Module } from '@nestjs/common';
import { CourtDecisionResolver } from './courtDecision.resolver';
import { CourtDecisionService } from './courtDecision.service';

@Module({
  providers: [CourtDecisionResolver, CourtDecisionService]
})
export class CourtDecisionModule { }
