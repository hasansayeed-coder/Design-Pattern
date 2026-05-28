// SOLUTION: Dynamically wrapping objects to extend behavior cleanly

// 1. The Base Component
class SimpleCoffee{
    getCost(){
        return 2.00 ; 
    }

    getDescription(){
        return "Simple Coffee" ;
    }
}

// 2. Decorators (Wrappers that accept the object and enhance it)
function MilkDecorator(coffee){
    return {
        getCost :  function() {
            return coffee.getCost() + 0.50 ; 
        }, 
        getDescription : function() {
            return coffee.getDescription() + " , Milk" ;
        }
    }
}

function SugarDecorator(coffee){
    return{
        getCost : function (){
            return coffee.getCost() + 0.20 ;
        } , 
        getDescription :  function (){
            return coffee.getDescription() + " , Sugar" ; 
        }
    }
}

function CaramelDecorator(coffee){
    return {
        getCost : function() {
            return coffee.getCost() + 0.70 ;
        } , 
        getDescription : function() {  
            return coffee.getDescription() + " , Caramel" ;
        }
    }
}

// --- Running the Application ---
// Customer A wants simple coffee
let myCoffee = new SimpleCoffee() ; 

// Customer A changes their mind and wants to stack toppings dynamically!
myCoffee = MilkDecorator(myCoffee) ; 
myCoffee = SugarDecorator(myCoffee) ; 
myCoffee = CaramelDecorator(myCoffee) ; 