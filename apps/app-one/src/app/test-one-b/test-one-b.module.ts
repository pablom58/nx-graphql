import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TestOneB } from './test-one-b.model'
import { TestOneBDto } from './test-one-b.dto';
import { TestOneBResolver } from './test-one-b.resolver';
import { TestOneBService } from './test-one-b.service';
import { TestOneBRepository } from './test-one-b.repository'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TestOneB])],
      dtos: [{
        DTOClass: TestOneBDto
      }],
    })
  ],
  providers: [TestOneBResolver, TestOneBService, TestOneBRepository],
})
export class TestOneBModule {}
