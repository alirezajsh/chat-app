export default class Message{
    
    content:string;
    madeDate:Date;
    id : number;
    senderId:number;
    receiverId:number;
    isSaw:boolean;
    isDeleted:boolean;
    isBlocked:boolean;

    constructor(input:{
        content:string;
        madeDate:Date;
        id : number;
        senderId:number;
        receiverId:number;
        isSaw:boolean;
        isDeleted:boolean;
        isBlocked:boolean;
    }){
        this.content = input.content;
        this.madeDate = input.madeDate;
        this.id = input.id;
        this.senderId = input.senderId;
        this.receiverId = input.receiverId;
        this.isSaw = input.isSaw;
        this.isDeleted = input.isDeleted;
        this.isBlocked = input.isBlocked;
    }

    see(){
        this.isSaw = true;
    }

    block(){
        this.isBlocked = true;
    }
    delete(){
        this.isDeleted = true;
    }
    unblock(){
        this.isBlocked = false;
    }


}