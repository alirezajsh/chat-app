export class User {
    private id:number;
    private name:string;
    private password: string;
    private usersId:number[];
    private username:string;

    constructor(id:number,
        name:string,
        password: string,
        usersId:number[],
        username:string,
    ){
        this.name = name;
        this.id = id;
        this.username = username;
        this.usersId = usersId;
        this.password = password;
    }

    addUser(userId:number){
        this.usersId.push(userId);
    }

    getNthUser(index:number){
        return this.usersId[index];
    }

    getName(){
        return this.name;
    }

    getId(){return this.id;}

    getUsername(){return this.username;}

    getPassword(){return this.password;}
}
