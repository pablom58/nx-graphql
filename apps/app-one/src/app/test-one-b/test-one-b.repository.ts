import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestOneB } from './test-one-b.model';

@Injectable()
export class TestOneBRepository {
  constructor(
    @InjectRepository(TestOneB) private repository: Repository<TestOneB>
  ) {}
}
