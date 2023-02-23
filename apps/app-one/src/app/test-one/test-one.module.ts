import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TestOne } from './test-one.model';
import { TestOneDto } from './test-one.dto';
import { TestOneResolver } from './test-one.resolver';
import { TestOneService } from './test-one.service';
import { TestOneRepository } from './test-one.repository';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TestOne])],
      dtos: [{
        DTOClass: TestOneDto,
      }]
    })
  ],
  providers: [TestOneResolver, TestOneService, TestOneRepository],
})
export class TestOneModule {}
