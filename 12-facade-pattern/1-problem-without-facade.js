// PROBLEM: Client logic is overwhelmed by managing complex subsystem dependencies

// Subsystem 1: Inventory Management

class InventorySystem{
    checkStock(productId){
        console.log(`📦 [Inventory]: Checking warehouse stock for Product ID: ${productId}...`);
        return true ;
    }
}

// Subsystem 2: Payment Processing Gateway

class PaymentProcessor{
    chargeCard(amount){
        console.log(`💳 [Payment]: Processing $${amount} authorization transaction charge...`);
        return true ;
    }
}

// Subsystem 3 : Logistics & Shipping
class ShippingService{
    createLabel(productId){
        console.log(`🚚 [Logistics]: Generating tracking barcode and booking courier delivery route...`);
        return "TRK-9928172";
    }
}

// Subsystem 4 : Notification Manager
class NotificationService{
    sendEmail(trackingId){
        console.log(`📧 [Notification]: Dispatching order receipt email with Tracking ID: ${trackingId}.`);
    }
}

// --- Main Application UI Controller ---
// Imagine this complex routine being duplicated across mobile checkouts, web checkouts, etc.


const productId = "LAPTOP-2026" ; 
const price = 1200 ; 

const inventory = new InventorySystem() ;
const payment = new PaymentProcessor() ; 
const shipping = new ShippingService() ; 
const notifications = new NotificationService() ;

console.log("🛒 --- STARTING DIRECT CHECKOUT FLOW ---");
// The client has to explicitly manage the strict order and execution of every sub-system

if(inventory.checkStock(productId)){
    if(payment.chargeCard(price)){
        const trackingId = shipping.createLabel(productId) ;
        notifications.sendEmail(trackingId) ; 
        console.log("🎉 Order Complete!") ;
    }
}

// CRITICAL FLAWS:
// 1. High Tight Coupling: If the PaymentProcessor updates its method signature from `chargeCard()` to `processStripePayment()`, your app breaks in every file handling checkout.
// 2. High Cognitive Load: Every developer building a purchase channel must fully understand the order and configuration details of 4 distinct backend systems.