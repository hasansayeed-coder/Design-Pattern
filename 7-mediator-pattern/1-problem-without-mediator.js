// PROBLEM: Tight cross-dependencies (Many-to-Many Spaghetti Code)

class User{
    constructor(name){
        this.name = name ;  
        this.contacts = [] ; 
    }

    addContact(user){
        this.contacts.push(user) ; 
    }

    // Direct peer-to-peer communication
    sendDirectMessage(message , toUser){
        console.log(`${this.name} sends direct message to ${toUser.name}: "${message}"`);
        toUser.receive(message , this) ; 
    }

    receive(message , fromUser){
        console.log(`${this.name} received message from ${fromUser.name}: "${message}"`);
    }
}

// --- Running the Application ---

const alice = new User('Alice') ; 
const bob = new User('Bob') ; 
const charlie = new User('Charlie') ; 

// Every user has to be manually linked to everyone else
alice.addContact(bob) ; 
alice.addContact(charlie) ; 
bob.addContact(alice) ; 
bob.addContact(charlie) ; 

alice.sendDirectMessage("Hey Bob, did you see the repository updates?", bob) ; 
bob.sendDirectMessage("Yeah Alice, they look clean!", alice) ;


// CRITICAL FLAWS:
// 1. Chaotic Mesh Network: If you have 100 users, each user object has to manage an array of 99 other users.
// 2. High Coupling: Reusing the 'User' class in a different app is impossible because it is deeply entangled with peer collection logic.