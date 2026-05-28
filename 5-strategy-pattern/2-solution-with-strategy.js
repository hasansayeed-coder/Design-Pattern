// SOLUTION: Encapsulating algorithms inside interchangeable Strategy classes

// 1. The Strategy Family (Isolated, modular algorithms)

class FedExStrategy{
    calculate(packageData) {
        return 5.00 + (packageData.weight * 1.2) ;
    }
}

class UpsStrategy{
    calculate(packageData){
        return 4.50 + (packageData.weight * 1.1) + (packageData.dimensions * 0.5) ; 
    }
}

class DhlStrategy{
    calculate(packageData){
        return 25.00 + (packageData.weight * 0.8) ;
    }
}

// 2. The Context (The wrapper that uses the strategy seamlessly)
class ShippingOrder{
    constructor(packageData){
        this.packageData = packageData ; 
        this.shippingStrategy = null ; 
    }

    setStrategy(strategy){
        this.shippingStrategy = strategy ; 
    }

    calculateTotal(){
        if(!this.shippingStrategy){
            throw new Error("Please select a shipping method first.") ; 
        }

        const cost = this.shippingStrategy.calculate(this.packageData) ; 
        return Math.round(cost * 100) / 100 ; 
    }
}


// --- Running the Application ---
const packageInfo = {weight : 10 , dimensions : 5} ; 
const order = new ShippingOrder(packageInfo) ; 


// The user chooses FedEx on the website UI
order.setStrategy(new FedExStrategy()) ; 
console.log(`Dynamic FedEx Cost: $${order.calculateTotal()}`); // $17

// The user switches their mind and chooses UPS instead
order.setStrategy(new UpsStrategy()) ; 
console.log(`Dynamic UPS Cost: $${order.calculateTotal()}`); // $18


// Look how clean! The 'ShippingOrder' class remains completely untouched.



