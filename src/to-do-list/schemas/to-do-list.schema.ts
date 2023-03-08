import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToDoListDocument = ToDoList & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class ToDoList {
  @Prop({
    default: 'input title here',
  })
  title: string;

  @Prop({
    default: Date.now,
  })
  dueDate: Date;

  @Prop({
    default: 'input description here',
  })
  description: string;

  @Prop({
    default: 2,
  })
  priority: number;
}

export const ToDoListSchema = SchemaFactory.createForClass(ToDoList);
