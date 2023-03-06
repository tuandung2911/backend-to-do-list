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

  findAll() {
    return `This action returns all toDoList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toDoList`;
  }

  async update(id: string, updateToDoListDto: UpdateToDoListDto) {
    return await this.toDoListModel.findByIdAndUpdate(id, updateToDoListDto);
  }

  async remove(id: string) {
    return await this.toDoListModel.findByIdAndDelete(id);
  }
}
