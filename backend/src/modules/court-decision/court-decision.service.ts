
import { Injectable } from '@nestjs/common';
import { CourtDecision } from './models/court-decision.model';

@Injectable()
export class CourtDecisionService {
    async findAll(): Promise<CourtDecision[]> {
        return Promise.resolve([{ id: '1' }])
    }
}