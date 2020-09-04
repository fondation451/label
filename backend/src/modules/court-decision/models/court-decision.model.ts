import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CourtDecision {
    @Field(() => String)
    id!: string;
}