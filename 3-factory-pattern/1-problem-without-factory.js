// PROBLEM: Manual, hardcoded instantiation across the app

class Truck{
    constructor() {
        this.type = 'Truck' ;
    }
    deliver() {
        return "Delivering cargo by land in a box truck. 🚚";
    }
}

class Ship {
    constructor() {
        this.type = 'Ship' ; 
    }

    deliver() {
        return "Delivering cargo by sea in a container ship. 🚢";
    }
}

// --- Main Application Logic ---
// Imagine this logic is scattered across 10 different files in your app

function processOrder(transportType){
    let vehicle ; 

    // The app is forced to explicitly know about every single class name.
    // If you add "Airplane" tomorrow, you have to find and modify every single one of these if/else blocks!

    if(transportType === 'land'){
        vehicle = new Truck() ; 
    }else if(transportType == 'sea'){
        vehicle = new Ship() ; 
    }else{
        console.log("Unknown vehicle type!") ; 
        return ;
    }

    console.log(`[Order Processed]: ${vehicle.deliver()}`);

}

processOrder("land") ; 
processOrder("sea") ; 