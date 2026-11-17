


export default class User{
    id:number;
    phoneNumber:string;
    password:string;
    firstName:string;
    lastName: string;
    userIds: number[];
    username:string;
    isOnline: boolean;
    lastSeen:Date;


    constructor(input:{
        id:number,
        phoneNumber:string,
        password:string,
        firstName:string,
        lastName: string,
        userIds: number[],
        username:string,
        isOnline:boolean,
        lastSeen:Date,
    }){
        this.id = input.id;
        this.phoneNumber = input.phoneNumber;
        this.password = input.password;
        this.lastName = input.lastName;
        this.firstName = input.firstName;
        this.userIds = input.userIds;
        this.username = input.username;
        this.isOnline = input.isOnline;
        this.lastSeen = input.lastSeen;
    }


    addUserId(id:number):void{
        this.userIds.push(id);
    }

    removeUserId(id:number):void{
        this.userIds.filter(userId => userId !== id);
    }

    markOnline():void{
        this.isOnline = true;
    }
    markOffline():void{
        this.isOnline = false;
        this.lastSeen = new Date();
    }


}