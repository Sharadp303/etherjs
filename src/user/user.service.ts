import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { user } from "./schema/user.schema";
import * as bcrypt from 'bcrypt';
import { signindto } from "./Dto/signin.dto";

@Injectable()
export class userService{
    constructor(@InjectModel(user.name) private userModel:Model<user>){}

   async signup(userdto){
       let res= await this.userModel.create({
        name:userdto.name,
        email:userdto.email,
        password:await bcrypt.hash(userdto.password,10),
        age:userdto.age
       });
      return res;
    }

   async signin(signindto:signindto){
      const {email,password}=signindto;
      let res= await this.userModel.findOne({email})
      if(!res){
        throw new UnauthorizedException('Invalid email or pass')
      }    
      const checkpass=await bcrypt.compare(password,res.password)
      if(!checkpass){
        throw new UnauthorizedException('Invalid email or pass')
      }
      return "signed in"

   } 

 
}