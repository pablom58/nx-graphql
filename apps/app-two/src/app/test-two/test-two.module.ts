import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TestTwo } from './test-two.model';
import { TestTwoDto } from './test-two.dto';
import { TestTwoResolver } from './test-two.resolver';
import { TestTwoService } from './test-two.service';
import { TestTwoRepository } from './test-two.repository';

@Module({
  providers: [TestTwoResolver, TestTwoService, TestTwoRepository],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TestTwo])],
      dtos: [{
        DTOClass: TestTwoDto,
      }],
    })
  ],
})
export class TestTwoModule {}
