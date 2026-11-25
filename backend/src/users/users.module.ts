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

  constructor(name: string, username: string, password: string, email: string);
  constructor(data: {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
  });

  constructor(
    nameOrData:
      | string
      | {
          id: number;
          name: string;
          username: string;
          password: string;
          email: string;
          createdAt: Date;
        },
    username?: string,
    password?: string,
    email?: string,
  ) {
    if (typeof nameOrData === 'string') {
      this.name = nameOrData;
      this.username = username!;
      this.password = password!;
      this.email = email!;
      this.createdAt = new Date();
    } else {
      this.id = nameOrData.id;
      this.name = nameOrData.name;
      this.username = nameOrData.username;
      this.password = nameOrData.password;
      this.email = nameOrData.email;
      this.createdAt = nameOrData.createdAt;
    }
  }


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
