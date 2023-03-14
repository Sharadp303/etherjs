import { Body, Controller, Get, Post } from "@nestjs/common";
import { signindto } from "./Dto/signin.dto";
import { userdto } from "./Dto/userdto";
import { userService } from "./user.service";


@Controller('user')
export class userController{
    constructor(private readonly userserv:userService){}
   
    @Post('signin')
    signin(@Body() signindto:signindto){
        return this.userserv.signin(signindto);

    }
   
   
    @Post('signup')
 signup(@Body() userdto:userdto){
       return this.userserv.signup(userdto);
    }
}