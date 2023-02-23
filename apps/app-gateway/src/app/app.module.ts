import { Module } from '@nestjs/common';
import { GraphQLModule } from 'apps/app-gateway/src/app/graphql/graphql.module';

@Module({
  imports: [GraphQLModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
