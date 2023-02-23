import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as BaseGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    BaseGraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        cors: true,
        useGlobalPrefix: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'test-one', url: 'http://localhost:8080/graphql' },
            { name: 'test-one-b', url: 'http://localhost:8080/graphql' },
            { name: 'test-two', url: 'http://localhost:8081/graphql' },
          ],
        }),
      },
    }),
  ],
  exports: [BaseGraphQLModule],
})
export class GraphQLModule {}
