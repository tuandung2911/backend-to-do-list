import { Module } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoListController } from './to-do-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoList, ToDoListSchema } from 'src/schema/to-do-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ToDoList.name,
        schema: ToDoListSchema,
      },
    ]),
  ],
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
