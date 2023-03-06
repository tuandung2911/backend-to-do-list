import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToDoListDocument = ToDoList & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class ToDoList {
  @Prop()
  title: string;

  @Prop({
    default: Date.now,
  })
  dueDate: Date;

  @Prop()
  description: string;

  @Prop()
  priority: number;
}

export const ToDoListSchema = SchemaFactory.createForClass(ToDoList);
