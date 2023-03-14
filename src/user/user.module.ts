import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose'
import { userSchema } from "./schema/user.schema";
import { userController } from "./user.controller";
import { userService } from "./user.service";

@Module({
imports:[MongooseModule.forFeature([{ name:'user',schema:userSchema}])],

providers:[userService],
controllers:[userController]
})
export class userModule{}