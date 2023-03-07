import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDoList, ToDoListDocument } from 'src/Schemas/toDoList.schema';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';

@Injectable()
export class ToDoListService {
  constructor(
    @InjectModel(ToDoList.name)
    private readonly toDoListModel: Model<ToDoListDocument>,
  ) {}
  async create(input: CreateToDoListDto): Promise<ToDoListDocument> {
    const menu = new this.toDoListModel(input);
    return await menu.save();
  }

  async findAll(): Promise<ToDoListDocument[]> {
    return (await this.toDoListModel.find().sort({ dueDate: -1 })) ?? [];
  }

  async update(id: string, updateToDoListDto: UpdateToDoListDto) {
    if (!id) {
      throw new Error('required id');
    }
    return await this.toDoListModel.findByIdAndUpdate(id, updateToDoListDto);
  }

  async remove(id: string) {
    return await this.toDoListModel.findByIdAndDelete(id);
  }

  async deleteByArrayId(input: { ids: [string] }) {
    return await this.toDoListModel.deleteMany({ _id: { $in: input.ids } });
  }
}
