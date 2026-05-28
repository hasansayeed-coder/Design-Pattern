// PROBLEM: Monolithic, rigid switch blocks that handle too many responsibilities

class ShippingCalculator{
    calculateCost(packageData , carrier){

        let cost = 0 ; 

        // Big, messy conditional logic.
        // If FedEx updates its formula or if we add "DHL", this file becomes a nightmare to maintain.
        if(carrier === 'fedex'){
            // FedEx algorithm: base rate + weight multiplier
            cost = 5.00 + (packageData.weight * 1.2) ; 
        }else if(carrier === 'ups'){
            // UPS algorithm: dimension volume + weight
            cost = 4.50 + (packageData.weight * 1.1) + (packageData.dimensions * 0.5) ; 
        }else if(carrier === 'dhl'){
            // DHL algorithm: flat rate international premium
            cost = 25.00 + (packageData.weight * 0.0) ; 
        }else{
            throw new Error("Unknown shipping carrier.") ;
        }

        return Math.round(cost * 100) / 100 ; // round to 2 decimals
    }
}

// --- Running the Application ---
const packageInfo = {weight : 10 , dimensions : 5} ; 
const calculator = new ShippingCalculator() ; 

console.log(`FedEx Cost: $${calculator.calculateCost(packageInfo, "fedex")}`);
console.log(`UPS Cost: $${calculator.calculateCost(packageInfo, "ups")}`);


// CRITICAL FLAWS:
// 1. Violation of Single Responsibility: The calculator class contains the math formulas for every single shipping company.
// 2. High Risk of Regression: A typo while updating the FedEx formula could accidentally break the UPS code block.



