// SOLUTION: Centralized communication hub (Many-to-One Architecture)

// 1. The Mediator

class ChatRoom{
    constructor(){
        this.users = {} ; // Central registry of users
    }

    register(user){
        this.users[user.name] = user ;
        user.chatroom = this ;  
    }

    send(message , fromUser , toUserKey){
        if(toUserKey){
            const recipient = this.user[toUserKey] ; 
            if(recipient){
                recipient.receive(message , fromUser) ;
            }
        }else {
            Object.key(this.users).forEach(key => {
                if(key != fromUser.name){
                    this.users[key].receive(message , fromUser) ;
                }
            }) ; 
        }
    }
}

// 2. The Colleague (Objects that use the mediator)
class User{
    constructor(name){
        this.name = name ; 
        this.chatroom = null ; 
    }

    send(message , toUserKey = null){
        // The user doesn't pass an object, just a string name to the hub
        this.chatroom.send(message , this , toUserKey) ;
    }

    receive(message , fromUser){
        console.log(`[${this.name}'s Screen]: New message from ${fromUser.name} -> "${message}"`);
    }
}

// --- Running the Flexible Application ---

const mediator = new ChatRoom() ; 

const alice = new User('Alice') ; 
const bob = new User('Bob') ; 
const charlie = new User('Charlie') ; 

// Simply register users to the central hub
mediator.register(alice); 
mediator.register(bob) ; 
mediator.register(charlie) ;

// Direct message routed through the mediator
alice.send("Hey Bob, can you look at my code?", "Bob");

// Broadcast announcement routed to everyone through the mediator
charlie.send("Server is going down for maintenance in 5 minutes!");