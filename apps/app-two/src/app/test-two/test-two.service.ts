import { Injectable } from '@nestjs/common';
import { TestTwoRepository } from './test-two.repository';

@Injectable()
export class TestTwoService {
  constructor(private _testTwoRepository: TestTwoRepository) {}
}
