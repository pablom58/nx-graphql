import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestOne } from './test-one.model';
import { Repository } from 'typeorm';

@Injectable()
export class TestOneRepository {
  constructor(
    @InjectRepository(TestOne) private repository: Repository<TestOne>
  ) {}
}
