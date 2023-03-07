import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://dungcntt2911:MTQvndd1dqwmGaCT@todolist-demo.3lnicn3.mongodb.net/?retryWrites=true&w=majority',
    ),
    ToDoListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
