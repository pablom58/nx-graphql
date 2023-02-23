import { BaseModel } from '@test/core-lib';
import { Column, Entity, JoinColumn, ObjectType, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TestOne } from '../test-one/test-one.model';

@Entity()
export class TestOneB extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne((): ObjectType<TestOne> => TestOne, testOne => testOne.testOneB, { eager: true })
  @JoinColumn()
  testOne: TestOne
}
