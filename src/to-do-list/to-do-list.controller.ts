import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';

@Controller('to-do-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Post()
  async create(@Body() createToDoListDto: CreateToDoListDto) {
    return await this.toDoListService.create(createToDoListDto);
  }

  @Get()
  findAll() {
    return this.toDoListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toDoListService.findOne(+id);
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
}
