import { BaseModel } from '@test/core-lib';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestTwo extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  testOneId: number;
}
