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

}
