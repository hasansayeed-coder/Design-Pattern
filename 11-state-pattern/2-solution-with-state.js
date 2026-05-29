// SOLUTION: Encapsulating state behaviors into interchangeable State classes

// 1. Concrete State Classes (Each encapsulates the complete logic of that specific state)

class FreeState{
    upload(fileSizeMB){
        if(fileSizeMB > 5){
            console.log("❌ [Free State]: Upload Denied! Max limit is 5MB.") ; 
            return false; 
        }
        console.log("✅ [Free State]: Uploaded successfully to Basic storage cluster.");
        return true ;
    }
}

class SilverState{
    upload(fileSizeMB){
        if(fileSizeMB > 50){
            console.log("❌ [Silver State]: Upload Denied! Premium limit is 50MB.");
            return false ; 
        }
        console.log("✅ [Silver State]: Uploaded successfully to High-speed Premium cluster.");
        return true ;
    }
}

class GoldState{
    upload(fileSizeMB){
        // Gold has unlimited size logic cleanly separated here
        console.log("✅ [Gold State]: Unlimited Upload verified! Processing file instantly.");
        return true ; 
    }
}

// 2. The Context Class (Maintains a reference to the active state)

class UserAccount{
    constructor(name){
        this.name = name ; 
        // The default initial state is Free
        this.state = new FreeState() ;
    }

    // Set a new state object dynamically at runtime
    setState(stateInstance){
        this.state = stateInstance ; 
        console.log(`\n🔄 System: User state swapped to [${stateInstance.constructor.name}]`);
    }

    // Delegate the execution entirely to the active state object
    uploadFile(fileSizeMB){
        console.log(`[Request]: ${this.name} attempts to upload a ${fileSizeMB}MB file...`);
        this.state.upload(fileSizeMB) ;
    }
}

// --- Running the Flexible Application ---
const user = new UserAccount("Hasan") ; 

// Starts in FreeState
user.uploadFile(4) ; // Allowed by FreeState
user.uploadFile(20) ; // Blocked by FreeState


// Transition state smoothly at runtime
user.setState(new SilverState()) ; 
user.uploadFile(20) ; // Allowed by SilverState
user.uploadFile(100) ; // Blocked by SilverState


// Transition to Gold
user.setState(new GoldState()) ; 
user.upload(100) ; // Allowed by GoldState