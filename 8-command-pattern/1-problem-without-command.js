// PROBLEM: Tight coupling between the UI/Trigger and the Business Logic

// The Receivers (The actual devices that know how to do the work)

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

// The Invoker (The remote control triggering the action)
class SimpleRemoteControl{
    constructor(light , ac){
        this.light = light ; 
        this.ac = ac ;
    }

    // Hardcoded actions mapped directly to button presses
    pressButton1(){
        this.light.turnOn() ;
    }

    pressButton2(){
        this.ac.start() ;
    }
}

// --- Running the Application ---
const livingRoomLight = new Light() ;
const bedroomAC = new AirConditioner() ; 

const remote = new SimpleRemoteControl(livingRoomLight , bedroomAC) ;
remote.pressButton1() ; // Turns on light
remote.pressButton2() ;// Starts AC


// CRITICAL FLAWS:
// 1. High Coupling: The remote control cannot function without knowing the exact methods of Light and AC.
// 2. Rigid Configuration: Changing Button 1 to turn off the light instead of turning it on requires modifying the remote class structure.
// 3. No History tracking: Implementing an "Undo" button is nearly impossible because the remote doesn't keep a record of past actions.


