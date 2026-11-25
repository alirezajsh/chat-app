import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  private id : number;
  private name:string;
  private username:string;
  private createdAt: Date;
  private password:string;
  private email:string;

  getCreatedAt(){return this.createdAt;}
  getId(){return this.id;}
  getName(){return this.name;}
  getUsername(){return this.username;}
  getPassword(){return this.password;}
  getEmail(){return this.email;}
  setName(name:string){
    this.name = name; 
  }
  setUsername(username:string){
    this.username = username;
  }
  setPassword(password:string){
    this.password = password;
  }
  setEmail(email:string){
    this.email = email;
  }
  
}
