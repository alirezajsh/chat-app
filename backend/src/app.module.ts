import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module.js';
import { MessageModule } from './message/message.module.js';

@Module({
  imports: [UsersModule, MessageModule],
  
})
export class AppModule {}