import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourtDecisionModule } from './modules/courtDecision/courtDecision.module';

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
