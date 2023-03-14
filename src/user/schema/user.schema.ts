import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose';

import {Document} from 'mongoose';
export type userDocument=Document<user>;

@Schema()
export class user{
    @Prop({required:true})
    name:string;

    @Prop()
    age:number;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;
}

export const userSchema=SchemaFactory.createForClass(user)