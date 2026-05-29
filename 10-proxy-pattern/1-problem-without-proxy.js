// PROBLEM: Uncontrolled, expensive direct resource consumption

class ExpensiveCryptoAPI{
    constructor(){
        console.log("⚡ Connecting and authenticating with secure External API...");
    }

    fetchPrice(coin){
        console.log(`📡 Sending network request to external servers for: [${coin}]...`);
        // Simulating a slow network API call delay
        return `Price of ${coin}: $65,000`;
    }
}

// --- Main Application UI Logic ---
const api = new ExpensiveCryptoAPI(); 

// User clicks a button to view Bitcoin price 3 times in a row
console.log(api.fetchPrice("BTC")) ; 
console.log(api.fetchPrice("BTC")) ; // Wasteful: same data fetched again over network
console.log(api.fetchPrice("BTC")) ; // Wasteful: same data fetched again over network

// CRITICAL FLAWS:
// 1. High Latency and Cost: It repeatedly hits an external server for data it already fetched a second ago.
// 2. Lack of Control Access: The main application cannot easily inject logging or rate-limiting without modifying the API requester class itself.