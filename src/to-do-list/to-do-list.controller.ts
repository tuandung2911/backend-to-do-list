import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';
import { ToDoListDocument } from 'src/schema/to-do-list-schema';

@Controller('to-do-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Post()
  async create(@Body() createToDoListDto: CreateToDoListDto) {
    console.log('vao controller', JSON.stringify(createToDoListDto));
    return await this.toDoListService.create(createToDoListDto);
  }

  @Get()
  async findAll(): Promise<ToDoListDocument[]> {
    return await this.toDoListService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateToDoListDto: UpdateToDoListDto,
  ) {
    return await this.toDoListService.update(id, updateToDoListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDoListService.remove(id);
  }

  @Post('delete-by-array-id')
  deleteByArrayId(@Body() input: { ids: [string] }) {
    return this.toDoListService.deleteByArrayId(input);
  }
}
