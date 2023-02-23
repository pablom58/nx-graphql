import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from './graphql/graphql.module';
import { TestTwoModule } from './test-two/test-two.module';
import { AdminJsModule } from './admin-js/admin-js.module';
import { ConfigModule } from './config/config.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [ConfigModule, GraphQLModule, DatabaseModule, AdminJsModule, AwsModule, TestTwoModule],
})
export class AppModule {}
