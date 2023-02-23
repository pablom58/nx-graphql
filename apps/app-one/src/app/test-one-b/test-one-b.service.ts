import { Injectable } from '@nestjs/common';
import { TestOneBRepository } from './test-one-b.repository';

@Injectable()
export class TestOneBService {
  constructor(private testOneBRepository: TestOneBRepository) {}
}
