import { Module } from '@nestjs/common';
import { MessageService } from './message.service.js';
import { MessageGateway } from './message.gateway.js';

@Module({
  providers: [MessageGateway, MessageService],
})
export class MessageModule {
  private id:number;
  private content:string;
  private writerId:number;
  private receiverId:number;
  private isSeen:boolean;
  private isBlocked:boolean;
  private isDeleted:boolean;
  private isEdited:boolean;
  

  // ========== GETTER ==========
  getId(){return this.id;}
  getContent(){return this.content;}
  getWriterId(){return this.writerId;}
  getReceiverId(){return this.receiverId;}
  getIsSeen(){return this.isSeen;}
  getIsBlocked(){return this.isBlocked;}
  getIsDeleted(){return this.isDeleted;}
  getIsEdited(){return this.isEdited;}


  // ========== SETTER ==========
  setContent(content:string){ this.content = content;}
  seen(){this.isSeen = true;}
  block(){this.isBlocked = true;}
  unBlock(){this.isBlocked = false;}
  delete(){this.isDeleted = true;}
  setEdited(){this.isEdited = true;}

}
