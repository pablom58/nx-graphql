import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from './graphql/graphql.module';
import { TestOneModule } from './test-one/test-one.module';
import { TestOneBModule } from './test-one-b/test-one-b.module';
import { AdminJsModule } from './admin-js/admin-js.module';
import { ConfigModule } from './config/config.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [ConfigModule, GraphQLModule, DatabaseModule, AdminJsModule, AwsModule, TestOneModule, TestOneBModule],
})
export class AppModule {}
