import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as BaseGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    BaseGraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      useGlobalPrefix: true,
    }),
  ],
  exports: [BaseGraphQLModule],
})
export class GraphQLModule {}
