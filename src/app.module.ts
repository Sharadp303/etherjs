import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { userModule } from './user/user.module';
import { eventModule } from './listen/event.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/practice'),userModule,eventModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
