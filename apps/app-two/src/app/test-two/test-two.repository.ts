import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestTwo } from './test-two.model';

@Injectable()
export class TestTwoRepository {
  constructor(
    @InjectRepository(TestTwo) private _repository: Repository<TestTwo>
  ) {}
}
