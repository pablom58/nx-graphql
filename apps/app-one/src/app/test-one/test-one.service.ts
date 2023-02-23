import { Injectable } from '@nestjs/common';
import { TestOneRepository } from './test-one.repository';

@Injectable()
export class TestOneService {
  constructor(
    private _testOneRepository: TestOneRepository,
  ) {}
}
