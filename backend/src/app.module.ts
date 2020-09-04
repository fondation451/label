import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourtDecisionResolver } from './modules/court-decision/court-decision.resolver';
import { CourtDecisionModule } from './modules/court-decision/court-decision.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true
    }),
    CourtDecisionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
