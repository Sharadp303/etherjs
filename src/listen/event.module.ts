import { Module } from "@nestjs/common";
import { eventController } from "./event.controller";
import { eventService } from "./event.service";

@Module({
   controllers:[eventController],
   providers:[eventService]
})
export class eventModule{}