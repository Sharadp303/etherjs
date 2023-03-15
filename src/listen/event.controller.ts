import { Controller, Get } from "@nestjs/common";
import { eventService } from "./event.service";

@Controller('event')
export class eventController{
    constructor(private readonly eventservice:eventService ){}

    @Get()
    listen(){
      return  this.eventservice.listen();
    }
    
    @Get('learn')
    learn(){
      return  this.eventservice.learn();
    }
    
    @Get('interact')
    interact(){
      return  this.eventservice.interact();
    }

    @Get('comptroller')
    comptroller(){
      return  this.eventservice.comptroll();
    }
}