// SOLUTION: Unifying complex subsystem operations under a clean Facade interface

// --- Subsystems (Unchanged, independent systems) ---

class InventorySystem{
    checkStock(productId){
        return true ; 
    }
}

class PaymentProcessor{
    chargeCard(amount){
        return true ;
    }
}

class ShippingService{
    createLabel(productId){
        return "TRK-9928172" ;
    }
}

class NotificationService{
    sendEmail(trackingId){
        console.log(`📧 [Notification]: Receipt dispatched with Tracking ID: ${trackingId}.`);
    }
}

// --- The Facade Layer (The clean point of entry) ---
class OrderFacingAPI{
    constructor(){
        this.inventory = new InventorySystem() ;
        this.payment = new PaymentProcessor() ; 
        this.shipping = new ShippingService() ;
        this.notifications = new NotificationService();
    }

    // Expose one simple high-level API abstraction method
    placeOrder(productId , price){
        console.log(`\n🚀 [Facade]: Initiating placement procedure for Product: ${productId}...`);

        const isStockAvailable = this.inventory.checkStock(productId) ;

        if(!isStockAvailable){
            console.log("❌ Order Failed: Item out of stock.");
            return false ; 
        }

        const isPaymentSuccess = this.payment.chargeCard(price) ; 
        if(!isPaymentSuccess){
            console.log("❌ Order Failed: Card authorization declined.");
            return false ; 
        }

        const trackingId = this.shipping.createLabel(productId) ; 
        this.notifications.sendEmail(trackingId) ; 


        console.log("🎉 [Facade]: Transaction successfully completed through unified tunnel.");
        return true;
    }
}


// --- Main Application UI Controller ---
// Completely simplified, elegant, and protected from system updates!


const onlineStoreCheckout = new OrderFacingAPI() ; 

onlineStoreCheckout.placeOrder("LAPTOP-2026", 1200);
onlineStoreCheckout.placeOrder("PHONE-7721", 800);