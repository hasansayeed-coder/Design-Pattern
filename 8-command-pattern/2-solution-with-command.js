// SOLUTION: Encapsulating requests as independent objects

// 1. The Receivers (The actual workers)

class Light{
    turnOn(){
        console.log("💡 The light is ON");
    }
    turnOff(){
        console.log("🌑 The light is OFF");
    }
}

class AirConditioner{
    start(){
        console.log("❄️ AC started cooling...");
    }
    stop(){
        console.log("📴 AC stopped.");
    }
}

// 2. The Commands (The standalone request objects)
class LightOnCommand{
    constructor(light){
        this.light = light
    }

    execute(){
        this.light.turnOn()
    }
    undo(){
        this.light.turnOff() ; 
    }
}

class LightOffCommand{
    constructor(light){
        this.light = light ;
    }

    execute(){
        this.light.turnOff() ; 
    }
    undo(){
        this.light.turnOn();
    }
}

class ACStartCommand{
    constructor(ac){
        this.ac = ac ; 
    }

    execute(){
        this.ac.start() ; 
    }
    undo(){
        this.ac.stop() ; 
    }
}

// 3. The Invoker (The Remote Control - completely decoupled)
class FlexibleRemoteControl{
    constructor(){
        this.slots = {} ; 
        this.history = [] ; 
    }

    setCommand(slotNumber , command){
        this.slots[slotNumber]= command ;
    }

    pressButton(slotNumber){
        if(this.slots[slotNumber]){
            this.slots[slotNumber].execute() ; 
            this.history.push(this.slots[slotNumber]) ;
        }else{
            console.log("Slot unassigned") ;
        }
    }

    pressUndo(){
        if(this.history.length > 0){
            const lastCommand = this.history.pop() ; 
            console.log("\n[Undo Triggered]: Reversing last action...");
            lastCommand.undo() ;
        }else{
            console.log("Nothing to undo!");
        }
    }
}



// --- Running the Flexible Application ---
const light = new Light() ; 
const ac = new AirConditioner() ; 

// Wrap the requests into command objects
const lightOn = new LightOnCommand(light) ; 
const lightOff = new LightOffCommand(light) ; 
const acStart = new ACStartCommand(ac) ;


const smartRemote = new FlexibleRemoteControl() ; 


// Map commands to slots dynamically at runtime
smartRemote.setCommand(1 , lightOn) ; 
smartRemote.setCommand(2 , acStart) ; 

// Simulating user interaction
smartRemote.pressButton(1) ; 
smartRemote.pressButton(2) ; 

// Changing configuration dynamically without altering the Remote class code!
smartRemote.setCommand(1 , lightOff) ; 
smartRemote.pressButton(1) ; 


// Testing the Undo Feature tracking
smartRemote.pressUndo(); // 💡 Light turns back ON!
smartRemote.pressUndo(); // 📴 AC stops!