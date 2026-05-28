// SOLUTION: Abstracting creation behind a Central Factory

// 1. The Products (Objects to be created)

class Truck{
    deliver() {
       return "Delivering cargo by land in a box truck. 🚚"; 
    }
}

class Ship {
    deliver(){
        return "Delivering cargo by sea in a container ship. 🚢";
    }
}

class Airplane{
    deliver(){
        return "Delivering urgent cargo by air in a cargo plane. ✈️";
    }
}

// 2. The Factory (The single source of truth for object creation)

class VehicleFactory{
    static createVehicle(type){
        switch(type.toLoweCase()){
            case 'land' : 
                return new Truck() ; 
            case 'sea' : 
                return new Ship() ; 
            case 'air' : 
                return new Airplane() ; // Easily added without breaking existing code!
            default : 
                throw new Error('Vehicle type not recognised.')
        }
    }
}

// --- Main Application Logic ---
// Clean, decoupled, and completely unaware of individual product classes!

function processOrder(transportType) {
    try{
        // The app just asks the factory for an object. It doesn't care HOW it's made.
        const vehicle = VehicleFactory.createVehicle(transportType) ; 
        console.log(`[Order Processed]: ${vehicle.deliver()}`);
    }catch(error){
        console.log(`[Error]: ${error.message}`)
    }
}