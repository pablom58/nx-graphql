import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from '@test/core-lib';
import { TestOneB } from '../test-one-b/test-one-b.model';

@Entity()
export class TestOne extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => TestOneB, testOneB => testOneB.testOne)
  testOneB: TestOneB
}
