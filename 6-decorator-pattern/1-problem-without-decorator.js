// PROBLEM: Class Explosion due to rigid inheritance structures

class BasicCoffee{
    getCost(){
        return 2.00 ; 
    }

    getDescription(){
        return "Basic Coffee" ; 
    }
}

// What if they want milk? We make a class.
class CoffeeWithMilk extends BasicCoffee{
    getCost(){
        return super.getCost() + 0.50 ; 
    }

    getDescription(){
        return super.getDescription() + " , Milk" ;
    }
}

// What if they want milk AND sugar? We make another class.
class CoffeeWithMilkAndSugar extends CoffeeWithMilk{
    getCost(){
        return super.getCost() + 0.70 ; 
    }

    getDescription() {
        return super.getDescription + " , Sugar";
    }
}

class UltimateCoffee extends CoffeeWithMilkAndSugar{
    getCost() {
        return super.getCost() + 0.70 ; 
    }

    getDescription(){
        return super.getDescription() + " , Caramel"
    }
}

// --- Running the Application ---
const order1 = new CoffeeWithMilkAndSugar() ; 
console.log(`Order 1: ${order1.getDescription()} | Total: $${order1.getCost()}`) ; 


const order2 = new UltimateCoffee() ; 
console.log(`Order 2: ${order2.getDescription()} | Total: $${order2.getCost()}`);


// CRITICAL FLAWS:
// 1. Class Explosion: If we have 10 different toppings, we would need to code dozens of permutation classes manually.
// 2. Inflexible: You cannot remove a topping dynamically at runtime once the object is created.